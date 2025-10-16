ada levelan rule priortas next.js route:

static - con folder: /app/about/page.tsx -> tertinggi
Dynamic ([slug]) - con folder: /app/[slug]/page.tsx -> menengah
catch all ([...slug]) - con folder: /app/[...slug]/page.tsx -> terendah
optional catch all - con folder: /app/[[...slug]]/page.tsx -> fleksible

note: Kalau ada [slug] dan [...slug] di level sama, [slug] diprioritaskan.
