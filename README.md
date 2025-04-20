# Smart Parking System for Bennett University

A comprehensive smart parking solution designed for Bennett University to streamline parking management, enhance user experience, and optimize parking space utilization.

## Features

- **Real-time Parking Availability**: View available parking slots across campus in real-time
- **Interactive Map**: Visual representation of all parking zones with detailed slot information
- **Vehicle Type Categorization**: Support for different vehicle types (cars, bikes, SUVs)
- **WhatsApp Integration**: Request and manage parking slots via WhatsApp
- **User Dashboard**: Comprehensive user profile with parking history and statistics
- **Trip Management**: View, book, and manage parking trips
- **Admin Dashboard**: Secure interface for administrators to manage parking slots and bookings
- **Live Tracking**: Real-time updates on parking availability with visual indicators
- **Zone-Based System**: Different parking zones for students, faculty, and visitors

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Real-time Updates**: Supabase Realtime
- **Messaging**: WhatsApp Business API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Supabase account
- WhatsApp Business API credentials

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/smart-parking-system.git
   cd smart-parking-system
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   WHATSAPP_API_TOKEN=your_whatsapp_api_token
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost
