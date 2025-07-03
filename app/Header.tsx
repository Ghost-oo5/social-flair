"use client";
import React, { useState } from "react";
import { Menu, X, Play } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SocialFlair</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#examples"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Examples
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Success Stories
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">

            <SignedOut>
              <SignInButton forceRedirectUrl={"/"}>
                <Link
                  href="#login"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Log In
                </Link>
              </SignInButton>
              <SignUpButton forceRedirectUrl={"/"}>
                <Link
                  href="#signup"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#examples"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Examples
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#login"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Log In
              </a>
              <a
                href="#signup"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-center"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
