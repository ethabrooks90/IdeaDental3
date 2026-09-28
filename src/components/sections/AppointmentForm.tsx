"use client";

import { useState, type FormEvent } from "react";
import { appointmentServices, business } from "@/lib/content";
import { ArrowUpRight } from "../icons";

/**
 * Appointment request — same fields as the existing site (service, name, phone, message).
 * INTEGRATION POINT: there is no booking backend. The live site's real process is that every
 * request is confirmed by a phone call, so submitting opens a call to the office. Swap
 * `handleSubmit` for a POST to the practice's booking/CRM endpoint when one exists.
 */
export default function AppointmentForm() {
  const [service, setService] = useState(appointmentServices[0]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    window.location.href = business.phoneHref;
  }

  const field =
    "w-full rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-[15px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full max-w-[640px] text-left" aria-label="Request an appointment">
      <fieldset>
        <legend className="mb-3 text-[14px] text-white/70">Choose your service</legend>
        <div className="flex flex-wrap gap-2">
          {appointmentServices.map((s) => (
            <label
              key={s}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[14px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-white ${
                service === s ? "border-white bg-white text-night" : "border-white/25 text-white/85 hover:border-white/60"
              }`}
            >
              <input
                type="radio"
                name="service"
                value={s}
                checked={service === s}
                onChange={() => setService(s)}
                className="sr-only"
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="appt-name">
          Name
        </label>
        <input id="appt-name" name="name" type="text" required autoComplete="name" placeholder="Name" className={field} />
        <label className="sr-only" htmlFor="appt-phone">
          Phone number
        </label>
        <input id="appt-phone" name="phone" type="tel" required autoComplete="tel" placeholder="Phone number" className={field} />
      </div>
      <div className="mt-3 flex items-stretch gap-3">
        <label className="sr-only" htmlFor="appt-message">
          Message
        </label>
        <input id="appt-message" name="message" type="text" placeholder="Message (general information only)" className={field} />
        <button
          type="submit"
          data-hover-scale
          aria-label="Request an appointment — calls the office"
          className="grid size-[52px] shrink-0 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowUpRight className="size-5" />
        </button>
      </div>
      <p className="mt-4 text-center text-[13px] text-white/60">
        Please don’t include personal health details. A member of our staff will call to confirm — or reach us
        directly at{" "}
        <a href={business.phoneHref} className="text-white underline-offset-4 hover:underline">
          {business.phone}
        </a>
        .
      </p>
    </form>
  );
}
