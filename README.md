# Becklan Field App V4.0 (NO-PREFLIGHT + PATCHED)

## Fixes
- Ping button not responding (JS error) — fixed by binding elements with document.getElementById.
- Failed to fetch — fixed by sending JSON as text/plain (no CORS preflight).

## Apps Script /exec
https://script.google.com/macros/s/AKfycbyuOYHM9Tpq88jK5pgxZKyXXJ9dTE1vanym0iXENv3PocF95RT65unun5q6RrxKR5Iw/exec

## Backend requirement
Apps Script `doPost(e)` must parse JSON from: `e.postData.contents`.
