
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the correct blog post data based on slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, redirect to blog main page
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  if (!post) return null;

  return (
    <>
      <Helmet>
        <title>{post.title} | Poiotes Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        {/* Open Graph tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Back button */}
          <div className="py-6">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <ArrowLeft size={16} className="mr-1" />
              Wróć do blogów
            </Link>
          </div>
          
          {/* Hero section */}
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime} min czytania</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-10">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="object-cover w-full h-full" 
              />
            </div>
          </div>
          
          {/* Article content */}
          <article className="max-w-3xl mx-auto prose prose-lg prose-blue">
            {post.content.map((section, idx) => (
              <div key={idx} className="mb-8">
                {section.heading && (
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.heading}</h2>
                )}
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
                {section.listItems && (
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    {section.listItems.map((item, liIdx) => (
                      <li key={liIdx} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
                {section.image && (
                  <div className="my-8">
                    <img 
                      src={section.image.url} 
                      alt={section.image.alt} 
                      className="rounded-lg mx-auto"
                    />
                    {section.image.caption && (
                      <p className="text-center text-sm text-gray-500 mt-2">{section.image.caption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </article>
          
          {/* Related posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Powiązane artykuły</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.relatedPosts.map(relatedPostId => {
                  const relatedPost = blogPosts.find(p => p.id === relatedPostId);
                  if (!relatedPost) return null;
                  
                  return (
                    <article key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={relatedPost.coverImage} 
                          alt={relatedPost.title} 
                          className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                          {relatedPost.title}
                        </h4>
                        <Link 
                          to={`/blog/${relatedPost.slug}`} 
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Czytaj więcej
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
