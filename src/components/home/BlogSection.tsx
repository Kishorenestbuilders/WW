
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Software Development: Trends to Watch in 2023",
    excerpt: "Explore the emerging technologies and methodologies shaping the future of software development.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "June 15, 2023",
    author: "Alex Morgan",
    category: "Technology",
    url: "/blog/future-of-software-development"
  },
  {
    id: 2,
    title: "Building Scalable SaaS Applications: Architecture Best Practices",
    excerpt: "Learn the key architectural patterns and practices for developing scalable SaaS applications.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    date: "May 22, 2023",
    author: "Jennifer Wu",
    category: "Development",
    url: "/blog/saas-architecture-best-practices"
  },
  {
    id: 3,
    title: "Why User-Centered Design Is Critical for Software Success",
    excerpt: "Discover how prioritizing user experience in software design leads to better products and happier customers.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    date: "April 10, 2023",
    author: "Raj Patel",
    category: "Design",
    url: "/blog/user-centered-design"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-whitewhiz-gray-dark mb-4">
              Latest Insights
            </h2>
            <p className="text-whitewhiz-gray-medium text-lg max-w-2xl">
              Explore our latest thoughts and insights on software development, technology trends, and industry best practices.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="border-whitewhiz-purple text-whitewhiz-purple hover:bg-whitewhiz-purple/10 transition-colors"
            >
              <span>View All Posts</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={post.url} className="block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-whitewhiz-gray-medium mb-4">
                  <span className="bg-whitewhiz-purple/10 text-whitewhiz-purple px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-3">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link to={post.url}>
                  <h3 className="text-xl font-semibold text-whitewhiz-gray-dark mb-3 hover:text-whitewhiz-purple transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-whitewhiz-gray-medium mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={post.url}
                  className="inline-flex items-center text-whitewhiz-purple font-medium hover:text-whitewhiz-purple-light transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
