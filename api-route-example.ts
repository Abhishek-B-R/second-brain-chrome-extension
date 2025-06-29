// This is an example of how your API route should look
// Place this in your Next.js app at: app/api/websites/route.ts

import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
// Import your database models and connection
// import { dbConnect } from '@/lib/db'
// import Website from '@/models/Website'
// import Tag from '@/models/Tag'
// import { enhancedFetchMetadata, getRandomColor } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { url, title, description, tags, scheduledFor } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // await dbConnect()

    // Check if URL already exists for this user
    // const existingWebsite = await Website.findOne({
    //   userId: session.user.email,
    //   url: url.trim(),
    // })

    // if (existingWebsite) {
    //   return NextResponse.json(
    //     {
    //       error: "URL_EXISTS",
    //       message: "This website already exists in your collection",
    //       existingWebsite,
    //     },
    //     { status: 409 },
    //   )
    // }

    // Enhanced metadata fetching with AI
    // const metadata = await enhancedFetchMetadata(url, title, description)

    // For now, use basic metadata
    const metadata = {
      title: title || "Untitled",
      description: description || "",
      type: "website",
      embedId: null,
      thumbnail: null,
    }

    // Process tags and update tag usage
    const processedTags = []
    if (tags && tags.length > 0) {
      for (const tagName of tags) {
        const trimmedTag = tagName.trim().toLowerCase()
        if (trimmedTag) {
          // Find or create tag logic here
          processedTags.push(trimmedTag)
        }
      }
    }

    // Create website object
    const websiteData = {
      userId: session.user.email,
      url: url.trim(),
      type: metadata.type,
      embedId: metadata.embedId,
      title: metadata.title,
      description: metadata.description,
      thumbnail: metadata.thumbnail,
      tags: processedTags,
      isFavorite: false,
      viewCount: 0,
      scheduledFor: scheduledFor ? new Date(scheduledFor) : undefined,
      reminderSent: false,
      createdAt: new Date(),
    }

    // Save to database
    // const website = new Website(websiteData)
    // await website.save()

    // For testing, just return the data
    console.log("Website data to save:", websiteData)

    return NextResponse.json({
      success: true,
      message: "Website saved successfully",
      data: websiteData,
    })
  } catch (error) {
    console.error("Error creating website:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
