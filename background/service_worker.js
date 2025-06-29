(() => {
  // Background service worker for MindWell Knowledge Hub extension

  const chrome = window.chrome; // Declare the chrome variable
  const b = new Map(); // Declare the b variable
  const y = (e) => function() {
      var o = arguments;
      return new Promise(((r, n) => {
        var i = e.apply(this, o);
        function s(e) {
          a(i, r, n, s, c, "next", e);
        }
        function c(e) {
          a(i, r, n, s, c, "throw", e);
        }
        s(void 0);
      }));
    }; // Declare the y variable

  chrome.runtime.onInstalled.addListener(() => {
    console.log('MindWell Knowledge Hub extension installed');
  });

  // Handle extension icon click (this is now handled by popup.html)
  // No need for action.onClicked since we're using a popup

  // Handle messages from content script or popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Background received message:', request);
    
    if (request.type === 'GET_CURRENT_TAB') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          sendResponse({ tab: tabs[0] });
        } else {
          sendResponse({ error: 'No active tab found' });
        }
      });
      return true; // Keep message channel open for async response
    }
    
    if (request.type === 'SAVE_WEBSITE') {
      // Handle website saving logic if needed
      console.log('Save website request:', request.data)
      sendResponse({ success: true })
    }
    
    // Handle other message types as needed
    sendResponse({ received: true });
  });

  // Handle tab updates to potentially inject content script
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      // Tab has finished loading, content script should be ready
      console.log('Tab updated:', tab.url)
    }
  });

  // Optional: Handle tab updates if needed
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // You can add logic here if you need to track tab changes
  });

  function a(e, t, o, r, n, i, s) {
    try {
      var a = e[i](s), c = a.value;
    } catch (e) {
      return void o(e);
    }
    a.done ? t(c) : Promise.resolve(c).then(r, n);
  }

  function t() {
    return o.apply(this, arguments);
  }

  function o() {
    var t;
    return t = function* () {
      if ("undefined" == typeof chrome) throw console.error("chrome is undefined: only run in background script"), new Error("chrome is undefined: only run in background script");
      const e = yield chrome.management.getSelf();
      return console.info(`Running in ${e.installType} mode`), e.installType.includes("development") ? "http://localhost:3000" : "https://supermemory.ai";
    }, o = function () {
      var r = arguments;
      return new Promise(((n, i) => {
        var s = t.apply(this, r);
        function a(t) {
          a(s, n, i, a, c, "next", t);
        }
        function c(t) {
          a(s, n, i, a, c, "throw", t);
        }
        a(void 0);
      }));
    }, o.apply(this, arguments);
  }

  const r = new Map();

  function n(e, t, o) {
    r.set(e, t);
  }

  const i = (e, t, o) => {
    const n = r.get(e.type);
    if (n) {
      const r = n(e, t, o);
      if (r instanceof Promise) return r.catch(console.error), !0;
    } else console.warn(`No handler registered for message type: ${e.type}`);
    return !1;
  };

  const s = {
    graphql_timeline_v2_bookmark_timeline: !0,
    rweb_tipjar_consumption_enabled: !0,
    responsive_web_graphql_exclude_directive_enabled: !0,
    verified_phone_label_enabled: !1,
    creator_subscriptions_tweet_preview_api_enabled: !0,
    responsive_web_graphql_timeline_navigation_enabled: !0,
    responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
    communities_web_enable_tweet_community_results_fetch: !0,
    c9s_tweet_anatomy_moderator_badge_enabled: !0,
    articles_preview_enabled: !0,
    tweetypie_unmention_optimization_enabled: !0,
    responsive_web_edit_tweet_api_enabled: !0,
    graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
    view_counts_everywhere_api_enabled: !0,
    longform_notetweets_consumption_enabled: !0,
    responsive_web_twitter_article_tweet_consumption_enabled: !0,
    tweet_awards_web_tipping_enabled: !1,
    creator_subscriptions_quote_tweet_preview_enabled: !1,
    freedom_of_speech_not_reach_fetch_enabled: !0,
    standardized_nudges_misinfo: !0,
    tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
    rweb_video_timestamps_enabled: !0,
    longform_notetweets_rich_text_read_enabled: !0,
    longform_notetweets_inline_media_enabled: !0,
    responsive_web_enhance_cards_enabled: !1,
    profile_label_improvements_pcf_label_in_post_enabled: !1,
    premium_content_api_read_enabled: !0,
    responsive_web_grok_analyze_button_fetch_trends_enabled: !0,
    responsive_web_grok_analyze_post_followups_enabled: !0,
    responsive_web_grok_share_attachment_enabled: !0
  };

  const l = (e, t, o) => {
    const n = o => {
      var i;
      const s = null === (i = e.requestHeaders) || void 0 === i ? void 0 : i.find(e => e.name.toLowerCase() === o.toLowerCase());
      return (null === s || void 0 === s ? void 0 : s.value) || "";
    }, i = n("authorization"), s = n("cookie"), a = n("x-csrf-token");
    t.cookie === s && t.csrf === a && t.auth === i || chrome.storage.local.set({ cookie: s, csrf: a, auth: i }, () => {
      chrome.runtime.lastError ? console.error("Error updating credentials:", chrome.runtime.lastError) : console.log("Updated cookie, csrf, and auth in local storage");
    });
  };

  const u = (e, ...t) => {
    console.log("[twitter]", e, ...t);
  }, d = (e, t) => {
    console.error(e, t);
  }, p = () => {
    var e = y((function* () {
      u("Received export request from popup");
      const e = yield chrome.tabs.create({ url: "https://x.com/i/bookmarks/all" });
      return yield new Promise((t => {
        const o = () => {
          e.id && chrome.tabs.get(e.id, (e => {
            "complete" === e.status ? t(!0) : setTimeout(o, 100);
          }));
        };
        o();
      })), chrome.storage.local.set({ attemptingImportCurrently: !0 }), chrome.tabs.query({ active: !0, currentWindow: !0 }, (() => {
        var e = y((function* (e) {
          const t = e[0];
          if (t.id) try {
            yield chrome.scripting.executeScript({ target: { tabId: t.id }, files: ["scripts/content.js"] });
          } catch (e) {
            console.error("Error injecting content script:", e);
          }
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      })());
    return function () {
      return e.apply(this, arguments);
    };
  }(), m = (() => {
    var e = y((function* (e, t = 3) {
      try {
        u(`Sending message of type ${e.type}:`, e.payload);
        const o = yield chrome.tabs.query({ url: ["*://*.twitter.com/*", "*://*.x.com/*"] });
        if (0 === o.length) {
          if (t > 0) return yield new Promise((e => setTimeout(e, 1e3))), m(e, t - 1);
          throw new Error("No Twitter tab found");
        }
        const r = o.map((t => t.id ? chrome.tabs.sendMessage(t.id, e).catch((e => {
          d(`Failed to send message to tab ${t.id}:`, e);
        })) : Promise.resolve()));
        yield Promise.all(r), u(`Message sent to ${o.length} tabs`);
      } catch (t) {
        d(`Error sending message of type ${e.type}:`, t);
      }
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  })(), f = (e, t) => {
    if (typeof m !== 'undefined') {
      return m({ type: "IMPORT_PROGRESS_UPDATE", payload: { progress: e, status: t } });
    } else {
      console.error("m variable is undeclared");
    }
  }, h = (() => {
    var e = y((function* (e = "", o = 0, r = []) {
      try {
        var n, i, a, c, p, _, y;
        const d = () => new Promise((e => {
          const t = () => {
            chrome.storage.local.get(["cookie", "csrf", "auth", "bookmarksApiId"], (o => {
              o.cookie && o.csrf && o.auth && o.bookmarksApiId ? e({ cookie: o.cookie, csrf: o.csrf, auth: o.auth, bookmarksApiId: o.bookmarksApiId }) : setTimeout(t, 3e3);
            }));
          };
          t();
        })), g = yield d(), v = yield o(), k = new Headers;
        k.append("Cookie", g.cookie), k.append("X-Csrf-token", g.csrf), k.append("Authorization", g.auth);
        const w = { count: 100, cursor: e, includePromotedContent: !1 }, E = `https://x.com/i/api/graphql/${g.bookmarksApiId}/Bookmarks?features=${encodeURIComponent(JSON.stringify(s))}&variables=${encodeURIComponent(JSON.stringify(w))}`, I = yield fetch(E, { method: "GET", headers: k, redirect: "follow" });
        if (429 === I.status) return u("Rate limited, waiting 60 seconds before retrying..."), yield f(o, 429), yield new Promise((e => setTimeout(e, 6e4))), h(e, o, r);
        let T = yield I.json();
        if (400 === I.status && (null === (i = T.errors) || void 0 === i || null === (n = i[0]) || void 0 === n ? void 0 : n.message)) {
          var b;
          const e = null === (b = T.errors[0].message.match(/following features cannot be null: (.*?)$/)) || void 0 === b ? void 0 : b[1];
          if (e) {
            const t = e.split(", "), o = ((e) => {
              for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {}, r = Object.keys(o);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(o).filter(((e) => Object.getOwnPropertyDescriptor(o, e).enumerable)))), r.forEach(((t) => {
                  l(e, t, o[t]);
                }));
              }
            })({}, s);
            t.forEach((e => {
              o[e] = !0;
            }));
            const r = `https://x.com/i/api/graphql/${g.bookmarksApiId}/Bookmarks?features=${encodeURIComponent(JSON.stringify(o))}&variables=${encodeURIComponent(JSON.stringify(w))}`, n = yield fetch(r, { method: "GET", headers: k, redirect: "follow" });
            T = yield n.json();
          }
        }
        const O = (null === (y = T.data) || void 0 === y || null === (_ = y.bookmark_timeline_v2) || void 0 === _ || null === (p = _.timeline) || void 0 === p || null === (c = p.instructions) || void 0 === c || null === (a = c[0]) || void 0 === a ? void 0 : a.entries) || [], P = O.filter((e => e.entryId.startsWith("tweet-"))), S = P.map((e => {
          var t, o, r, n, i, s, a, c, l;
          const u = null === e || null === (t = e.entryId) || void 0 === t ? void 0 : t.split("-")[1], d = null === e || null === (l = e.content) || void 0 === l || null === (c = l.itemContent) || void 0 === c || null === (a = c.tweet_results) || void 0 === a || null === (s = a.result) || void 0 === s || null === (i = s.core) || void 0 === i || null === (n = i.user_results) || void 0 === n || null === (r = n.result) || void 0 === r || null === (o = r.legacy) || void 0 === o ? void 0 : o.screen_name;
          return u ? `https://x.com/${d || "supermemoryai"}/status/${u}` : null;
        })).filter(Boolean);
        yield f(o, 102);
        const C = S.map((e => fetch(`${v}/backend/v1/add`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: e }) }))), $ = yield Promise.all(C), x = $.reduce(((e, t) => {
          const o = t.status;
          return e[o] = (e[o] || 0) + 1, e;
        }), {});
        Object.entries(x).forEach((([e, t]) => {
          u(`Status ${e}: ${t} tweets`);
        })), x[409] && (yield f(o, 409));
        const A = $.filter((e => !e.ok && 409 !== e.status)).length;
        A > 0 && (yield f(o, 500)), r = r.concat(P);
        const R = P.length;
        o += R, Math.max(o, 200), yield f(o, A > 0 ? 500 : x[409] ? 409 : 200), u(`Processing batch: ${R} new tweets, total: ${o}`);
        const M = (e => {
          const t = e.find((e => e.entryId.startsWith("cursor-bottom-")));
          return t ? t.content.value : null;
        })(O);
        if (M && R > 0) return yield new Promise((e => setTimeout(e, 1500))), h(M, o, r);
        yield m({ type: "IMPORT_COMPLETE", payload: { success: !0 } }), chrome.storage.local.set({ bookmarks: r }, (() => {
          u("Bookmarks stored in local storage");
        })), e = (new Date).toISOString();
        chrome.storage.local.get(["successful_exports"], (t => {
          const o = t.successful_exports || [];
          o.push({ timestamp: e, tweetCount: r.length }), chrome.storage.local.set({ successful_exports: o }, (() => {
            u(`Export completed: ${r.length} tweets`);
          }));
        })), chrome.storage.local.set({ attemptingImportCurrently: !1 }), window.postMessage({ type: "TWITTER_IMPORT_COMPLETE" }, window.location.origin);
      } catch (e) {
        d("Error fetching bookmarks:", e), chrome.storage.local.set({ attemptingImportCurrently: !1 });
      }
    }));
    return function () {
      return e.apply(this, arguments);
    };
  })(), g = (() => {
    var e = y((function* (e) {
      const t = yield o();
      return 200 === (yield fetch(`${t}/backend/v1/session`)).status;
    }));
    return function () {
      return e.apply(this, arguments);
    };\
  })();

  chrome.runtime.onInstalled.addListener((() => {
    var e = y((function* (e) {
      const o = yield g(), t = yield o();
      o || chrome.tabs.create({ url: `${t}/signin` });
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  })()), chrome.tabs.onRemoved.addListener((e => {
    b.delete(e);
  })), chrome.action.onClicked.addListener((() => {
    var e = y((function* (e) {
      if (e.id) try {
        if (!e.url || e.url.startsWith("chrome://") || e.url.startsWith("edge://") || e.url.startsWith("about:")) return void alert("Cannot modify Chrome system pages");
        const t = yield o();
        if (!(yield g())) return void chrome.tabs.create({ url: `${t}/signin` });
        const r = { isActive: !(b.get(e.id) || { isActive: !1 }).isActive };
        chrome.scripting.executeScript({ target: { tabId: e.id }, files: ["scripts/content.js"] }), b.set(e.id, r), yield chrome.action.setTitle({ tabId: e.id, title: r.isActive ? "Disable SuperMemory" : "Enable SuperMemory" });
      } catch (e) {
        console.error("Failed to toggle content:", e);
      }
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  })()), n("GET_SPACES", (() => {
    var e = y((function* (e, o, r) {
      const t = yield o(), n = yield fetch(`${t}/backend/v1/spaces`);
      r(yield n.json());
    }));
    return function (t, o, r) {
      return e.apply(this, arguments);
    };
  })()), n("EXPORT_TWITTER_BOOKMARKS", (() => {
    var e = y((function* (e, t, o) {
      p(), o({ status: "started" });
    }));
    return function (t, o, r) {
      return e.apply(this, arguments);
    };
  })()), n("SAVE_PAGE", (() => {
    var e = y((function* (e, o, r) {
      if (!e.payload) return void r({ error: "No payload" });
      const t = yield o();
      if (!(yield g())) return r({ error: "Not logged in" }), void chrome.tabs.create({ url: `${t}/signin` });
      console.log(e.payload);
      const n = yield fetch(`${t}/backend/v1/add`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ spaces: e.payload.spaces || [], content: e.payload.url, prefetched: e.payload.prefetched }) });
      200 === n.status ? r({ success: !0, data: yield n.json(), status: n.status }) : r({ error: "Failed to save page", status: n.status });
    }));
    return function (t, o, r) {
      return e.apply(this, arguments);
    };
  })()), n("ACTIVATE_CONTENT", (() => {
    var e = y((function* (e, o, r) {
      console.log("Activating content"), chrome.tabs.query({ active: !0, currentWindow: !0 }, (() => {
        var e = y((function* (e) {
          const t = e[0];
          if (t.id) try {
            yield chrome.scripting.executeScript({ target: { tabId: t.id }, files: ["scripts/content.js"] });
          } catch (e) {
            console.error("Error injecting content script:", e);
          }
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      })());
    }));
    return function (t, o, r) {
      return e.apply(this, arguments);
    };
  })()), n("SYNC_CHROME_BOOKMARKS", (() => {
    var e = y((function* (e, o, r) {
      chrome.bookmarks.onCreated.addListener(((e, t) => {
        console.log("Bookmark created:", t);
      }));
    }));
    return function (t, o, r) {
      return e.apply(this, arguments);
    };
  })()), n("IMPORT_CHROME_BOOKMARKS", (() => {
    var e = y((function* (e, o, r) {
      chrome.bookmarks.getRecent(100, (e => {
        console.log("Bookmarks:", e);
      }));
    }));
    return function (t, o, r) {
      return e.apply(this, arguments);
    };
  })()), chrome.runtime.onMessageExternal.addListener((() => {
    var e = y((function* (e, o, r) {
      if ("exportBookmarks" === e.action) return p(), r({ status: "exported" }), !0;
      if ("importBookmarks" === e.action) {
        const t = yield o();
        return chrome.bookmarks.getRecent(100, (() => {
          var o = y((function* (o) {
            for (const { url: r } of o) {
              console.log("Importing bookmark:", r);
              const o = yield fetch(`${t}/backend/v1/add`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: r, spaces: [] }) }), n = yield o.json();
              console.log("Response:", n);
            }
            r({ status: "imported", bookmarks: o });
          }));
          return function (e) {
            return o.apply(this, arguments);
          };
        })());
      }
      return "ping" === e.action ? (r({ status: "pong" }), !0) : void 0;
    }));
    return function (t, o, r) {
      return e.apply(this, arguments);
    };
  })()), chrome.webRequest.onBeforeSendHeaders.addListener((e => {
    try {
      if (!e || !e.url) return void console.error("Invalid details object received");
      if (!e.url.includes("x.com") && !e.url.includes("twitter.com")) return;
      if (!e.requestHeaders) return void console.error("No request headers found");
      chrome.storage.local.get(["bookmarksApiId", "cookie", "csrf", "auth"], (t => {
        try {
          const o = /https:\/\/x\.com\/i\/api\/graphql\/([^/]+)\/Bookmarks\?/, r = e.url.match(o);
          if ((null === r ? void 0 : r[1]) && !t.bookmarksApiId) {
            const e = r[1];
            chrome.storage.local.set({ bookmarksApiId: e }, (() => {
              chrome.runtime.lastError ? console.error("Error storing bookmarksApiId:", chrome.runtime.lastError) : console.log(`Stored bookmarksApiId: ${e}`);
            }));
          }
          l(e, t);
        } catch (e) {
          console.error("Error processing request headers:", e);
        }
      }));
    } catch (e) {
      console.error("Top level error in onBeforeSendHeaders listener:", e);
    }
  }), { urls: ["*://x.com/*", "*://twitter.com/*"] }, ["requestHeaders", "extraHeaders"]);\
})();
