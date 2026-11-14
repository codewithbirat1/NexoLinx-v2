'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  CONTACT_HEADER,
  TESTIMONIALS_DATA,
  COUNTRIES,
} from '@/constants/contact';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactSection() {
  // Testimonial Carousel State
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const currentTestimonial = TESTIMONIALS_DATA[activeTestimonialIdx];

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) =>
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
    );
  };

  // Form State
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project or requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate inquiry submission since no backend API endpoint is defined in the project
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: 'United States',
        message: '',
      });
    }, 1000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Project Inquiry"
      className="relative max-w-6xl mx-auto overflow-hidden bg-white text-[#111111]  "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* =========================================================================
            LEFT COLUMN: TESTIMONIAL / WHAT OUR CUSTOMERS SAY (Clean Light Theme)
           ========================================================================= */}
        <div className="flex flex-col justify-between border-b border-[#EBEBEB] bg-[#FDFCF9] px-6 py-12 sm:px-10 sm:py-16 md:px-14 lg:border-b-0 lg:border-r lg:px-16 lg:py-20 xl:px-20 xl:py-24">
          <div>
            {/* Left Header */}
            <h3 className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
              What Our Customers Say
            </h3>

            {/* Testimonial Quote Block */}
            <div className="relative mt-8 sm:mt-12">
              {/* Giant Quote Icon */}
              <div
                className="select-none text-4xl font-serif text-[#111111]/80 sm:text-5xl"
                aria-hidden="true"
              >
                “
              </div>

              {/* Quote Content */}
              <blockquote className="mt-3 min-h-[140px] text-sm leading-relaxed text-[#555555] sm:min-h-[160px] sm:text-base md:text-[17px] md:leading-[1.6]">
                {currentTestimonial.quote}
              </blockquote>
            </div>
          </div>

          {/* Testimonial Author & Navigation Controls */}
          <div className="mt-10 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#EAEAEA] pt-6">
              {/* Author Info */}
              <div className="flex items-center gap-3.5">
                <div className="relative size-11 overflow-hidden rounded-full border border-black/10 bg-[#EFEFEF] sm:size-12">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] sm:text-base">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-xs text-[#777777] sm:text-sm">
                    {currentTestimonial.role},{' '}
                    <span className="font-medium text-[#444444]">
                      {currentTestimonial.company}
                    </span>
                  </p>
                </div>
              </div>

              {/* Clutch Logo Mark */}
              <div className="flex items-center gap-1.5 opacity-90">
                <span className="text-lg font-black tracking-tight text-[#122238] font-sans">
                  Clutch
                </span>
                <span className="size-1.5 rounded-full bg-[#FF3D2E]" />
              </div>
            </div>

            {/* Carousel Navigation Arrow Buttons & Indicators */}
            <div className="mt-8 flex items-center justify-between">
              {/* Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevTestimonial}
                  aria-label="Previous customer testimonial"
                  className="flex size-10 items-center justify-center rounded-full border border-[#D5D5D5] bg-white text-[#444444] transition-all hover:border-black hover:bg-[#F2F2F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
                >
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNextTestimonial}
                  aria-label="Next customer testimonial"
                  className="flex size-10 items-center justify-center rounded-full border border-[#D5D5D5] bg-white text-[#444444] transition-all hover:border-black hover:bg-[#F2F2F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
                >
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Pill Slide Indicator */}
              <div
                className="flex items-center gap-1.5 rounded-full bg-[#E5E5E5] p-1"
                aria-label="Testimonial slides indicator"
              >
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonialIdx(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonialIdx === idx
                        ? 'w-7 bg-[#121212]'
                        : 'w-2 bg-[#A8A8A8] hover:bg-[#777777]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: CONTACT / PROJECT INQUIRY FORM (Premium Black Theme)
           ========================================================================= */}
        <div className="relative flex flex-col justify-between bg-black px-6 py-12 text-white sm:px-10 sm:py-16 md:px-14 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
          {/* Subtle Ambient Brand Glow */}
          <div
            className="pointer-events-none absolute -right-20 top-0 h-[360px] w-[360px] rounded-full blur-[140px] opacity-20"
            style={{
              background:
                'radial-gradient(circle, rgba(19, 116, 223, 0.45) 0%, rgba(15, 101, 197, 0.1) 60%, transparent 80%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand-primary)] sm:text-[13px]">
              {CONTACT_HEADER.eyebrow}
            </span>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white xs:text-4xl sm:text-5xl lg:text-[46px] lg:leading-[1.12]">
              {CONTACT_HEADER.title}
            </h2>

            {/* Supporting Description */}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#A0A0A0] sm:text-base">
              {CONTACT_HEADER.description}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6 sm:mt-10">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Full Name */}
                <div className="relative">
                  <label
                    htmlFor="contact-fullName"
                    className="block text-xs font-medium tracking-wide text-[#E0E0E0] sm:text-sm"
                  >
                    Full Name<span className="text-[var(--color-brand-primary)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`mt-2 w-full border-b bg-transparent pb-2 text-sm text-white placeholder-[#555555] transition-colors focus:border-[var(--color-brand-primary)] focus:outline-none sm:text-base ${
                      errors.fullName ? 'border-red-500' : 'border-[#333333]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="relative">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium tracking-wide text-[#E0E0E0] sm:text-sm"
                  >
                    Email Address<span className="text-[var(--color-brand-primary)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="alex@company.com"
                    className={`mt-2 w-full border-b bg-transparent pb-2 text-sm text-white placeholder-[#555555] transition-colors focus:border-[var(--color-brand-primary)] focus:outline-none sm:text-base ${
                      errors.email ? 'border-red-500' : 'border-[#333333]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone Number & Country (Optional) */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Phone Number */}
                <div className="relative">
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-medium tracking-wide text-[#E0E0E0] sm:text-sm"
                  >
                    Phone Number
                  </label>
                  <div className="relative mt-2 flex items-center border-b border-[#333333] pb-2 focus-within:border-[var(--color-brand-primary)]">
                    <span className="mr-2 text-base select-none" aria-hidden="true">
                      🇺🇸
                    </span>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(201) 555-0123"
                      className="w-full bg-transparent text-sm text-white placeholder-[#555555] focus:outline-none sm:text-base"
                    />
                  </div>
                </div>

                {/* Country (Optional) */}
                <div className="relative">
                  <label
                    htmlFor="contact-country"
                    className="block text-xs font-medium tracking-wide text-[#E0E0E0] sm:text-sm"
                  >
                    Country (Optional)
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="contact-country"
                      name="country"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full appearance-none border-b border-[#333333] bg-transparent pb-2 pr-8 text-sm text-white transition-colors focus:border-[var(--color-brand-primary)] focus:outline-none sm:text-base [&>option]:bg-[#121216] [&>option]:text-white"
                    >
                      {COUNTRIES.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <div
                      className="pointer-events-none absolute right-1 top-2.5 text-[#777777]"
                      aria-hidden="true"
                    >
                      <svg
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div className="relative pt-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium tracking-wide text-[#E0E0E0] sm:text-sm"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Tell us about your project, goals, timeline, or requirements*"
                  className={`mt-2 w-full border-b bg-transparent pb-2 text-sm text-white placeholder-[#555555] transition-colors focus:border-[var(--color-brand-primary)] focus:outline-none sm:text-base ${
                    errors.message ? 'border-red-500' : 'border-[#333333]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Feedback Notification */}
              {submitStatus === 'success' && (
                <div
                  role="alert"
                  className="rounded-xl border border-[var(--color-brand-primary)]/40 bg-[#0E1B2D] p-4 text-sm text-white"
                >
                  <p className="font-semibold text-[var(--color-brand-primary)]">
                    ✓ Inquiry submitted successfully!
                  </p>
                  <p className="mt-1 text-xs text-[#A0A0A0]">
                    Thank you for reaching out. We will review your project details and get back to you within 24 hours.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative flex w-full items-center justify-center rounded-full border border-white/20 bg-[#16161A] py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:border-[var(--color-brand-primary)] hover:bg-[#1E2633] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-60 sm:text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="size-4 animate-spin text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending Inquiry...
                    </span>
                  ) : (
                    <span>Submit Inquiry</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
