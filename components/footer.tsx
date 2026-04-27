"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Building2 } from "lucide-react"

export function Footer() {
  const [imageError, setImageError] = useState(false)

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[2fr_1fr_1fr] lg:gap-8">
          {/* Column 1: Logo & Company Info */}
          <div>
            <Link href="/" className="inline-flex flex-col items-start group">
              {!imageError? (
                <>
                  <div className="relative h-10 w-auto sm:h-12">
                    <Image
                      src="/images/mantra-builders.jpg"
                      alt="Mantra Builders Logo"
                      width={150}
                      height={60}
                      className="h-10 w-auto object-contain sm:h-12"
                      onError={() => setImageError(true)}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1.5">Activity Tracker</span>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 sm:h-12 sm:w-12">
                    <Building2 className="h-5 w-5 text-gray-600 sm:h-6 sm:w-6" />
                  </div>
                  <span className="font-mono text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors sm:text-base">
                    Mantra Builders
                  </span>
                </div>
              )}
            </Link>

            <p className="mt-3 max-w-sm text-xs leading-relaxed text-gray-600 text-balance sm:text-sm">
              A Mantra Builders initiative under Sustainable Living to track and promote environmental activities in residential communities.
            </p>

            <div className="mt-3 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-green-700 mt-0.5 shrink-0" />
                <p className="max-w-xs text-xs leading-relaxed text-gray-600 sm:text-sm">
                  3rd Floor, Bund Garden Rd, next to INOX Bund Garden<br />
                  Pune, Camp, Pune, Maharashtra 411001
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-700 shrink-0" />
                <a
                  href="mailto:sustainability@mantrabuilders.com"
                  className="text-xs text-gray-600 hover:text-green-700 transition sm:text-sm"
                >
                  sustainability@mantrabuilders.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 sm:text-sm">Platform</h4>
            <ul className="mt-3 space-y-1">
              <li>
                <Link
                  href="/mantra-dashboard"
                  className="text-xs text-gray-600 hover:text-green-700 transition sm:text-sm"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-xs text-gray-600 hover:text-green-700 transition sm:text-sm"
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="text-xs text-gray-600 hover:text-green-700 transition sm:text-sm"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 sm:text-sm">Quick Links</h4>
            <ul className="mt-3 space-y-1">
              <li>
                <Link
                  href="/login"
                  className="text-xs text-gray-600 hover:text-green-700 transition sm:text-sm"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 border-t border-gray-200 pt-3 text-center sm:mt-5 sm:pt-4">
          <p className="text-xs text-gray-500">
            Mantra Builders - Sustainability Initiative. Supporting sustainable communities.
          </p>
          <p className="mt-1.5 text-xs text-gray-400">
            © {new Date().getFullYear()} Mantra Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}