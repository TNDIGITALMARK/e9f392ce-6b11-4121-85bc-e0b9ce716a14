/**
 * AI-Powered Page Generator
 * Generates complete Next.js pages with layouts and sections
 */

export interface PageConfig {
  name: string;
  title: string;
  description: string;
  layout: 'landing' | 'dashboard' | 'auth' | 'blog' | 'profile';
  sections?: string[];
  seo?: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export class PageGenerator {
  /**
   * Generate a complete Next.js page
   */
  static generate(config: PageConfig): string {
    const { name, title, description, layout, sections = [], seo } = config;

    const metadata = seo
      ? this.generateMetadata(seo)
      : this.generateMetadata({ title, description });

    const pageContent = this.generatePageContent(layout, title, description, sections);

    return `${metadata}\n\n${pageContent}`;
  }

  /**
   * Generate metadata export
   */
  private static generateMetadata(seo: {
    title: string;
    description: string;
    keywords?: string[];
  }): string {
    const keywordsMeta = seo.keywords
      ? `,\n  keywords: ${JSON.stringify(seo.keywords)}`
      : '';

    return `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${seo.title}',
  description: '${seo.description}'${keywordsMeta}
};`;
  }

  /**
   * Generate page content based on layout type
   */
  private static generatePageContent(
    layout: string,
    title: string,
    description: string,
    sections: string[]
  ): string {
    switch (layout) {
      case 'landing':
        return this.generateLandingPage(title, description, sections);
      case 'dashboard':
        return this.generateDashboardPage(title, description);
      case 'auth':
        return this.generateAuthPage(title, description);
      case 'blog':
        return this.generateBlogPage(title, description);
      case 'profile':
        return this.generateProfilePage(title, description);
      default:
        return this.generateBasicPage(title, description);
    }
  }

  /**
   * Generate a landing page
   */
  private static generateLandingPage(
    title: string,
    description: string,
    sections: string[]
  ): string {
    const sectionComponents = sections.map((section) => {
      switch (section.toLowerCase()) {
        case 'hero':
          return `
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
            ${title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            ${description}
          </p>
          <button className="button-shadow animate-fade-in-up delay-200">
            Get Started
          </button>
        </div>
      </section>`;
        case 'features':
          return `
      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Feature {i}</h3>
                <p className="text-muted-foreground">
                  Description of feature {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>`;
        case 'testimonials':
          return `
      {/* Testimonials Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-card p-8 rounded-lg shadow-md">
                <p className="text-lg mb-4 italic">
                  "This is an amazing testimonial from a satisfied customer."
                </p>
                <p className="font-semibold">- Customer {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>`;
        case 'cta':
          return `
      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers today
          </p>
          <button className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
            Sign Up Now
          </button>
        </div>
      </section>`;
        default:
          return `
      {/* ${section} Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">${section}</h2>
          {/* Add your ${section} content here */}
        </div>
      </section>`;
      }
    });

    return `export default function Page() {
  return (
    <div className="min-h-screen">
${sectionComponents.join('\n\n')}
    </div>
  );
}
`;
  }

  /**
   * Generate a dashboard page
   */
  private static generateDashboardPage(title: string, description: string): string {
    return `import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">${title}</h1>
          <p className="text-muted-foreground">${description}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Users', value: '1,234' },
            { label: 'Revenue', value: '$12,345' },
            { label: 'Growth', value: '+23%' },
            { label: 'Active', value: '892' },
          ].map((stat, idx) => (
            <Card key={idx} className="p-6">
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium">Activity {i}</p>
                    <p className="text-sm text-muted-foreground">Description here</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full">New Item</Button>
              <Button className="w-full" variant="outline">Import</Button>
              <Button className="w-full" variant="outline">Export</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
`;
  }

  /**
   * Generate an auth page
   */
  private static generateAuthPage(title: string, description: string): string {
    return `'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-muted-foreground">${description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required={!isLogin}
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-primary hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </Card>
    </div>
  );
}
`;
  }

  /**
   * Generate a blog page
   */
  private static generateBlogPage(title: string, description: string): string {
    return `import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is the first blog post...', date: '2024-01-01' },
    { id: 2, title: 'Second Post', excerpt: 'This is the second blog post...', date: '2024-01-02' },
    { id: 3, title: 'Third Post', excerpt: 'This is the third blog post...', date: '2024-01-03' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">${title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ${description}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline">Read More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
`;
  }

  /**
   * Generate a profile page
   */
  private static generateProfilePage(title: string, description: string): string {
    return `'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Software developer and tech enthusiast',
    location: 'San Francisco, CA',
  });

  const handleSave = () => {
    console.log('Profile saved:', profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">${title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1 p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mb-4" />
              <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
              <p className="text-muted-foreground mb-4">{profile.email}</p>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant={isEditing ? 'outline' : 'default'}
                className="w-full"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
          </Card>

          {/* Details Card */}
          <Card className="lg:col-span-2 p-6">
            <h2 className="text-2xl font-semibold mb-6">Profile Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                ) : (
                  <p className="text-lg">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                ) : (
                  <p className="text-lg">{profile.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Bio</label>
                {isEditing ? (
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    rows={4}
                  />
                ) : (
                  <p className="text-lg">{profile.bio}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  />
                ) : (
                  <p className="text-lg">{profile.location}</p>
                )}
              </div>

              {isEditing && (
                <Button onClick={handleSave} className="w-full">
                  Save Changes
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
`;
  }

  /**
   * Generate a basic page
   */
  private static generateBasicPage(title: string, description: string): string {
    return `export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-6">${title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            ${description}
          </p>

          {/* Add your page content here */}
        </div>
      </section>
    </div>
  );
}
`;
  }
}
