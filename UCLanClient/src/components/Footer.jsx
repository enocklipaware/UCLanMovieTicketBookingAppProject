import React from 'react'
import { assets } from '../../../../UCLan Movie Ticket App/UCLanClient/src/assets/assets'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Github, Twitter, Mail, Facebook } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        setError('');
        // Simple email validation {Create a complex email validation system application}
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
          setError('Please enter a valid email address.');
          return;
        }
        setSubscribed(true);
        setEmail('');
        // Add API call for real subscription later after the project
      };

    return (

        <footer className="px-6 md:px-16 lg:px-36 mt-10 w-full text-gray-200 bg-linear-to-r from-black via-primary/80 to-pink-900/80 rounded-t-3xl shadow-2xl border-t">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-7 pt-10">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto drop-shadow-xl" src={assets.LogoWhite} alt="StanShow Logo" />
                    <p className="text-sm text-muted-foreground text-gray-300">
                        StanShow (University of Lancashire) is your ultimate movie ticket companion—discover, book, and enjoy the latest blockbusters with ease. Experience seamless booking, exclusive offers, and a world of entertainment at your fingertips!
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                        <img src={assets.googlePlay} alt="Google Play" className="h-10 w-auto hover:scale-105 transition" />
                        <img src={assets.appStore} alt="App Store" className="h-10 w-auto hover:scale-105 transition" />
                    </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 mt-6">
                    <a href="https://Instagram.com" target="_blank" rel="" aria-label="Instargarm"><img src={assets.Instagram_icon} alt="Instagram" className="h-6 w-6 hover:scale-110 transition" /></a>
                    <a href="https://facebook.com" target="_blank" rel="" aria-label="facebook"><img src={assets.Facebook_icon} alt="Facebook" className="h-6 w-6 hover:scale-110 transition" /></a>
                    <a href="https://X.com" target="_blank" rel="" aria-label="X"><img src={assets.X_icon_2} alt="X" className="h-6 w-6 hover:scale-110 transition" /></a>
                    <a href="https://tiktok.com" target="_blank" rel="" aria-label="tiktok"><img src={assets.tiktok_icon_black} alt="tiktok" className="h-6 w-6 hover:scale-110 transition" /></a>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8">
                    {subscribed ? (
                    <div className="text-green-400 font-semibold py-2">Thank you for subscribing!</div>
                    ) : (
                    <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                        <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Subscribe for updates"
                        className="px-4 py-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none"
                        />
                        <button
                        type="submit"
                        className="px-4 py-2 bg-primary text-white rounded-r-md font-semibold hover:bg-pink-500 transition"
                        >
                        Subscribe
                        </button>
                    </form>
                    )}
                    {error && <div className="text-pink-400 text-sm mt-1">{error}</div>}
                </div>
                </div>
                <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-10 md:gap-32">
                    <div>
                        <h2 className="font-medium mb-4 text-primary">Navigation</h2>
                        <ul className="text-base space-y-2">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-foreground ">
                                Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-foreground ">
                                About
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-foreground ">
                                Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-foreground ">
                                Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-foreground ">
                                Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-medium mb-4 text-primary'>Connect</h3>
                        <ul className=' space-y-2 text-sm'>
                            <li>
                                <a href="https://github.com" 
                                target='blank'
                                rel='nooper noreferrer'
                                className='flex items-center gap-2 text-muted-foreground hover:text-foreground'>
                                    {/* <Github className='h-5 w-5' /> */}
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" 
                                target='blank'
                                rel='nooper noreferrer'
                                className='flex items-center gap-2 text-muted-foreground hover:text-foreground'>
                                    {/* <Twitter className='h-5 w-5' /> */}
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:mochogestanley80@gmail.com" 
                                className='flex items-center gap-2 text-muted-foreground hover:text-foreground'>
                                    {/* <Mail className='h-5 w-5' /> */}
                                    <span>Mail</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com" 
                                target='blank'
                                rel='nooper noreferrer'
                                className='flex items-center gap-2 text-muted-foreground hover:text-foreground'>
                                    {/* <Facebook className='h-5 w-5' /> */}
                                    <span>Facebook</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h2 className="font-medium mb-4 text-primary">Contact Us</h2>
                        <div className="text-base space-y-2">
                        <p className="flex items-center gap-2 hover:text-gray-800 transition cursor-pointer"><span role="img" aria-label="phone">📞</span> +254-743-587-157</p>
                        <p className="flex items-center gap-2 hover:text-gray-800 transition cursor-pointer"><span role="img" aria-label="email">✉️</span> mochogestanley80@gmail.com</p>
                        <p className="flex items-center gap-2 hover:text-gray-800 transition cursor-pointer"><span role="img" aria-label="location">📍</span>Location Nairobi, Kenya 14252 - 00200</p>
                        </div>
                    </div>
                    </div>
                </div>

          {/* App Version */}
          <p className="text-center text-xs text-gray-900 mt-2">v8.0.0</p>
          <p className="pt-2 text-center text-sm text-gray-400 pb-6 tracking-wide">
            © {new Date().getFullYear()} StanShow Movie Ticket App. All rights reserved.
            <p className='mt-2'>
                Powered by {""}
                <a href="https://www.themoviedb.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline">
                    Stanley Mochoge (+254743587157)
                </a>
            </p>
          </p>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6  text-white p-2 rounded-full shadow-lg hover:bg-pink-500 transition z-50"
            aria-label="Back to top"
          >
            ↑
          </button>
        </footer>
      )
    }

export default Footer
