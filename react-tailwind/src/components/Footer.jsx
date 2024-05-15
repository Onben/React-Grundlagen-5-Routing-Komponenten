import React from 'react'

export default function Footer() {
    return (
      <div className="flex justify-between mt-10 border-t border-gray-400 pt-5">
        <div>
          <h3 className="text-sm uppercase font-bold">Resources</h3>
          <ul>
            <li><a href="/" className="text-xs hover:underline">Application</a></li>
            <li><a href="/" className="text-xs hover:underline">Documentation</a></li>
            <li><a href="/" className="text-xs hover:underline">Systems</a></li>
            <li><a href="/" className="text-xs hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase font-bold">Pricing</h3>
          <ul>
            <li><a href="/" className="text-xs hover:underline">Overview</a></li>
            <li><a href="/" className="text-xs hover:underline">Premium Plan</a></li>
            <li><a href="/" className="text-xs hover:underline">Affiliate</a></li>
            <li><a href="/" className="text-xs hover:underline">Promotion</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase font-bold">Company</h3>
          <ul>
            <li><a href="/" className="text-xs hover:underline">About Us</a></li>
            <li><a href="/" className="text-xs hover:underline">Blog</a></li>
            <li><a href="/" className="text-xs hover:underline">Partnership</a></li>
            <li><a href="/" className="text-xs hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase font-bold">Social</h3>
          <ul>
            <li><a href="/" className="text-xs hover:underline">Facebook</a></li>
            <li><a href="/" className="text-xs hover:underline">Twitter</a></li>
            <li><a href="/" className="text-xs hover:underline">Instagram</a></li>
            <li><a href="/" className="text-xs hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    );
  };
  