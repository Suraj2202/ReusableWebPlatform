# Reusable Static Website Platform

## Product Requirements Document | Technical Design Document | Architecture Document | Implementation Roadmap

**Version:** 1.0  
**Date:** 2026-06-19  
**Status:** Draft  
**Classification:** Internal / Client-Facing

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Business Goals](#2-business-goals)
3. [Functional Requirements](#3-functional-requirements)
4. [Non-Functional Requirements](#4-non-functional-requirements)
5. [User Personas](#5-user-personas)
6. [User Journeys](#6-user-journeys)
7. [Architecture Overview](#7-architecture-overview)
8. [System Components](#8-system-components)
9. [Technology Evaluation Matrix](#9-technology-evaluation-matrix)
10. [Final Technology Recommendation](#10-final-technology-recommendation)
11. [Folder Structure](#11-folder-structure)
12. [Configuration Strategy](#12-configuration-strategy)
13. [CMS Design](#13-cms-design)
14. [Deployment Strategy](#14-deployment-strategy)
15. [CI/CD Strategy](#15-cicd-strategy)
16. [SEO Strategy](#16-seo-strategy)
17. [Performance Strategy](#17-performance-strategy)
18. [Security Strategy](#18-security-strategy)
19. [Monitoring Strategy](#19-monitoring-strategy)
20. [Backup Strategy](#20-backup-strategy)
21. [Cost Analysis](#21-cost-analysis)
22. [Risks and Mitigations](#22-risks-and-mitigations)
23. [Implementation Roadmap](#23-implementation-roadmap)

---

## 1. Executive Summary

### Problem Statement

Small and medium businesses across industries (travel, real estate, consulting, fitness, photography, etc.) need professional, fast, SEO-optimized websites but lack technical expertise and budget for custom development. Agencies and freelancers building these sites repeatedly from scratch face scalability and maintenance challenges.

### Proposed Solution

A **single reusable static website template** that generates fully customized, production-ready websites for multiple clients through configuration alone. The platform separates **structure** (shared codebase) from **content** (per-client configuration), enabling:

- Zero-code client onboarding
- Consistent quality across all deployments
- Centralized template updates propagating to all client sites
- 100% free hosting and deployment infrastructure

### Value Proposition

| Stakeholder       | Value                                                                  |
| ----------------- | ---------------------------------------------------------------------- |
| Agency/Freelancer | Build once, deploy many. Reduce per-client effort from weeks to hours. |
| Client            | Professional website with CMS access at minimal cost.                  |
| End User          | Fast, mobile-friendly, accessible website experience.                  |

### Target Verticals

| Category                     | Example Use Cases                                   |
| ---------------------------- | --------------------------------------------------- |
| Travel & Tourism             | Tour packages, destination highlights, booking CTAs |
| Product Showcase             | Feature highlights, specifications, pricing         |
| Service Businesses           | Service descriptions, process flows, testimonials   |
| Consulting Firms             | Expertise areas, case studies, team profiles        |
| Interior Designers           | Portfolio galleries, before/after, style guides     |
| Real Estate                  | Property listings, virtual tours, agent profiles    |
| Fitness Coaches              | Programs, transformations, scheduling               |
| Model/Photography Portfolios | Image galleries, lookbooks, contact                 |
| Corporate Landing Pages      | Brand story, team, careers, contact                 |

---

## 2. Business Goals

### Primary Goals

| ID    | Goal                                               | Success Metric                                   |
| ----- | -------------------------------------------------- | ------------------------------------------------ |
| BG-01 | Create one template serving 10+ industry verticals | Template deployed for ≥3 different verticals     |
| BG-02 | Enable non-technical content management            | Client can update content without developer help |
| BG-03 | Achieve zero hosting cost per client site          | $0 monthly hosting bill per site                 |
| BG-04 | Deploy new client site within 2 hours              | End-to-end onboarding time ≤ 2 hours             |
| BG-05 | Maintain Lighthouse score > 90 across all sites    | Automated Lighthouse CI checks pass              |
| BG-06 | Support 50+ client sites from single template      | No degradation at scale                          |

### Secondary Goals

| ID    | Goal                                           | Success Metric                                     |
| ----- | ---------------------------------------------- | -------------------------------------------------- |
| BG-07 | Template updates propagate to all client sites | Single PR updates shared components                |
| BG-08 | Custom domain with HTTPS for every client      | SSL certificate auto-provisioned                   |
| BG-09 | SEO-ready out of the box                       | Structured data, meta tags, sitemap auto-generated |
| BG-10 | Minimal maintenance overhead                   | < 2 hours/month maintenance across all sites       |

### Revenue Model Options

```
┌─────────────────────────────────────────────────────┐
│  Revenue Models                                      │
├─────────────────────────────────────────────────────┤
│  1. One-time setup fee per client ($200-$500)       │
│  2. Monthly maintenance retainer ($50-$150/month)   │
│  3. Premium feature add-ons (booking, e-commerce)   │
│  4. White-label licensing to other agencies          │
└─────────────────────────────────────────────────────┘
```

---

## 3. Functional Requirements

### 3.1 Template Engine

| ID    | Requirement                                                    | Priority     |
| ----- | -------------------------------------------------------------- | ------------ |
| FR-01 | Single page layout with configurable sections                  | Must Have    |
| FR-02 | Multi-page support (Home, About, Services, Contact, Gallery)   | Must Have    |
| FR-03 | All content driven by configuration files (JSON/YAML/Markdown) | Must Have    |
| FR-04 | Theme customization via brand colors and fonts                 | Must Have    |
| FR-05 | Component show/hide based on configuration flags               | Must Have    |
| FR-06 | Responsive breakpoints: Mobile, Tablet, Desktop                | Must Have    |
| FR-07 | RTL language support                                           | Nice to Have |

### 3.2 Content Customization

| ID    | Requirement                                                     | Priority    |
| ----- | --------------------------------------------------------------- | ----------- |
| FR-08 | Custom logo upload (SVG, PNG, WebP)                             | Must Have   |
| FR-09 | Brand color palette (primary, secondary, accent, neutral)       | Must Have   |
| FR-10 | Hero banner image with overlay text                             | Must Have   |
| FR-11 | Hero background video support                                   | Should Have |
| FR-12 | Company information (name, tagline, description, founding year) | Must Have   |
| FR-13 | Services section (icon, title, description, CTA)                | Must Have   |
| FR-14 | Image gallery with lightbox                                     | Must Have   |
| FR-15 | Testimonials carousel/grid                                      | Must Have   |
| FR-16 | Contact details (phone, email, address, map embed)              | Must Have   |
| FR-17 | Social media links (configurable platforms)                     | Must Have   |
| FR-18 | FAQ accordion section                                           | Must Have   |
| FR-19 | SEO metadata per page (title, description, OG tags)             | Must Have   |
| FR-20 | Custom fonts via Google Fonts or self-hosted                    | Should Have |

### 3.3 CMS Capabilities

| ID    | Requirement                                   | Priority    |
| ----- | --------------------------------------------- | ----------- |
| FR-21 | Visual content editor for non-technical users | Must Have   |
| FR-22 | Image upload with automatic optimization      | Must Have   |
| FR-23 | Text editing with rich formatting             | Must Have   |
| FR-24 | Preview before publish                        | Should Have |
| FR-25 | Content versioning / rollback                 | Should Have |
| FR-26 | Role-based access (admin, editor)             | Should Have |

### 3.4 Pages & Sections

```
┌────────────────────────────────────────────────────┐
│  Standard Page Structure                            │
├────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │  Header (Logo + Navigation + CTA)            │  │
│  ├──────────────────────────────────────────────┤  │
│  │  Hero Section (Image/Video + Headline)       │  │
│  ├──────────────────────────────────────────────┤  │
│  │  About / Introduction                        │  │
│  ├──────────────────────────────────────────────┤  │
│  │  Services / Features                         │  │
│  ├──────────────────────────────────────────────┤  │
│  │  Gallery / Portfolio                         │  │
│  ├──────────────────────────────────────────────┤  │
│  │  Testimonials                                │  │
│  ├──────────────────────────────────────────────┤  │
│  │  FAQ                                         │  │
│  ├──────────────────────────────────────────────┤  │
│  │  Contact / CTA                               │  │
│  ├──────────────────────────────────────────────┤  │
│  │  Footer (Links + Social + Legal)             │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## 4. Non-Functional Requirements

### 4.1 Performance

| Metric                         | Target            | Measurement   |
| ------------------------------ | ----------------- | ------------- |
| Lighthouse Performance         | > 90              | Lighthouse CI |
| Lighthouse Accessibility       | > 90              | Lighthouse CI |
| Lighthouse Best Practices      | > 90              | Lighthouse CI |
| Lighthouse SEO                 | > 95              | Lighthouse CI |
| First Contentful Paint (FCP)   | < 1.5s            | WebPageTest   |
| Largest Contentful Paint (LCP) | < 2.5s            | WebPageTest   |
| Cumulative Layout Shift (CLS)  | < 0.1             | WebPageTest   |
| Total Bundle Size              | < 100KB (gzipped) | Build output  |
| Time to Interactive (TTI)      | < 3.0s            | Lighthouse    |

### 4.2 Scalability

| Requirement               | Target                   |
| ------------------------- | ------------------------ |
| Number of client sites    | 50+ from single template |
| Concurrent users per site | Unlimited (static CDN)   |
| Build time per site       | < 60 seconds             |
| Deployment time           | < 3 minutes              |

### 4.3 Reliability

| Requirement               | Target                    |
| ------------------------- | ------------------------- |
| Uptime                    | 99.9% (Cloudflare SLA)    |
| CDN Edge Locations        | 300+ (Cloudflare network) |
| Automatic failover        | Built into CDN            |
| Zero-downtime deployments | Atomic deployments        |

### 4.4 Maintainability

| Requirement                 | Target                         |
| --------------------------- | ------------------------------ |
| Template update propagation | Single merge updates all sites |
| Code duplication            | Zero (shared template repo)    |
| Documentation               | Complete onboarding guide      |
| Dependency updates          | Automated via Dependabot       |

### 4.5 Compatibility

| Requirement   | Target                                          |
| ------------- | ----------------------------------------------- |
| Browsers      | Chrome, Firefox, Safari, Edge (last 2 versions) |
| Devices       | Mobile, Tablet, Desktop                         |
| Screen Sizes  | 320px – 2560px                                  |
| Accessibility | WCAG 2.1 Level AA                               |

---

## 5. User Personas

### Persona 1: Agency Owner (Platform Operator)

```
┌─────────────────────────────────────────────────┐
│  Name: Alex — Digital Agency Founder            │
│  Age: 32                                         │
│  Technical Level: Advanced                       │
│  Goals:                                          │
│  • Deploy client sites quickly                   │
│  • Minimize per-client maintenance               │
│  • Scale to 50+ clients                          │
│  • Maximize profit margins                       │
│  Pain Points:                                    │
│  • Building from scratch every time              │
│  • Managing different tech stacks per client     │
│  • Hosting costs eating margins                  │
│  • Client content update requests               │
└─────────────────────────────────────────────────┘
```

### Persona 2: Freelance Developer (Platform Operator)

```
┌─────────────────────────────────────────────────┐
│  Name: Priya — Freelance Web Developer          │
│  Age: 27                                         │
│  Technical Level: Intermediate                   │
│  Goals:                                          │
│  • Deliver projects faster                       │
│  • Offer competitive pricing                     │
│  • Reduce ongoing support burden                 │
│  • Build recurring revenue                       │
│  Pain Points:                                    │
│  • Time spent on repetitive layouts              │
│  • Clients breaking sites with edits            │
│  • Managing multiple hosting accounts            │
│  • Scope creep on "simple" websites              │
└─────────────────────────────────────────────────┘
```

### Persona 3: Business Owner (End Client)

```
┌─────────────────────────────────────────────────┐
│  Name: Rahul — Travel Agency Owner              │
│  Age: 45                                         │
│  Technical Level: Non-technical                  │
│  Goals:                                          │
│  • Professional online presence                  │
│  • Update content independently                  │
│  • Good Google rankings                          │
│  • Mobile-friendly for customers                 │
│  Pain Points:                                    │
│  • Can't afford custom development               │
│  • Dependent on developer for every change       │
│  • Previous site was slow and outdated           │
│  • Doesn't understand technical jargon           │
└─────────────────────────────────────────────────┘
```

### Persona 4: Content Editor (Client Staff)

```
┌─────────────────────────────────────────────────┐
│  Name: Meera — Marketing Coordinator            │
│  Age: 28                                         │
│  Technical Level: Basic (uses Canva, social)    │
│  Goals:                                          │
│  • Update website content weekly                 │
│  • Upload new photos and testimonials           │
│  • Keep information current                      │
│  • Not break anything                            │
│  Pain Points:                                    │
│  • Intimidated by code                           │
│  • Unsure what's safe to change                  │
│  • Needs approval workflow                       │
│  • Wants visual preview                          │
└─────────────────────────────────────────────────┘
```

---

## 6. User Journeys

### Journey 1: New Client Onboarding (Agency/Freelancer)

```
┌─────┐    ┌─────────┐    ┌──────────┐    ┌───────────┐    ┌──────────┐    ┌────────┐
│Start│───▶│Fork Repo│───▶│Configure │───▶│Add Content│───▶│Deploy to │───▶│ Client │
│     │    │Template │    │site.yaml │    │& Assets   │    │Cloudflare│    │Handoff │
└─────┘    └─────────┘    └──────────┘    └───────────┘    └──────────┘    └────────┘
                                │                                    │
                                ▼                                    ▼
                          ┌──────────┐                        ┌──────────┐
                          │Set Colors│                        │Custom    │
                          │Logo, Info│                        │Domain    │
                          └──────────┘                        │+ HTTPS   │
                                                              └──────────┘
```

**Steps:**

1. Fork/clone template repository on GitHub
2. Edit `site.config.yaml` with client brand details
3. Add client assets (logo, images, videos) to content folder
4. Push to GitHub → triggers automatic deployment
5. Configure custom domain in Cloudflare Pages
6. Share CMS access credentials with client
7. Handoff documentation and training

**Time Estimate:** 1-2 hours

### Journey 2: Client Content Update (Non-Technical)

```
┌─────┐    ┌──────────┐    ┌───────────┐    ┌─────────┐    ┌──────────┐
│Start│───▶│Login to  │───▶│Edit Text/ │───▶│Preview  │───▶│Publish   │
│     │    │CMS Panel │    │Upload Image│   │Changes  │    │Changes   │
└─────┘    └──────────┘    └───────────┘    └─────────┘    └──────────┘
                                                                  │
                                                                  ▼
                                                            ┌──────────┐
                                                            │Auto Build│
                                                            │& Deploy  │
                                                            └──────────┘
```

**Steps:**

1. Navigate to CMS URL (e.g., `yoursite.com/admin`)
2. Authenticate via GitHub OAuth
3. Select content section to edit
4. Make changes using visual editor
5. Preview changes
6. Save/Publish → commits to Git → triggers rebuild
7. Changes live within 2-3 minutes

### Journey 3: Template Update Propagation (Developer)

```
┌─────┐    ┌──────────┐    ┌───────────┐    ┌─────────┐    ┌──────────┐
│Start│───▶│Update    │───▶│Test on    │───▶│Merge to │───▶│All Sites │
│     │    │Template  │    │Staging    │    │Main     │    │Rebuild   │
└─────┘    └──────────┘    └───────────┘    └─────────┘    └──────────┘
```

---

## 7. Architecture Overview

### 7.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PLATFORM ARCHITECTURE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        DEVELOPMENT LAYER                             │    │
│  │                                                                      │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐  │    │
│  │  │ Template Repo│  │ Design System│  │ Shared Components        │  │    │
│  │  │ (GitHub)     │  │ (Tailwind)   │  │ (Astro Components)       │  │    │
│  │  └──────────────┘  └──────────────┘  └──────────────────────────┘  │    │
│  │                                                                      │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                     CONFIGURATION LAYER                              │    │
│  │                                                                      │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐  │    │
│  │  │ site.config  │  │ Content Files│  │ Asset Files              │  │    │
│  │  │ (YAML)       │  │ (Markdown)   │  │ (Images/Video)           │  │    │
│  │  └──────────────┘  └──────────────┘  └──────────────────────────┘  │    │
│  │                                                                      │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                       CONTENT MANAGEMENT                             │    │
│  │                                                                      │    │
│  │  ┌──────────────────────────────────────────────────────────────┐   │    │
│  │  │ Decap CMS (Git-Based, No Backend Required)                   │   │    │
│  │  │ • Visual Editor    • Image Upload    • Preview               │   │    │
│  │  └──────────────────────────────────────────────────────────────┘   │    │
│  │                                                                      │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        BUILD LAYER                                   │    │
│  │                                                                      │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐  │    │
│  │  │ Astro SSG    │  │ Image Optim  │  │ Asset Pipeline           │  │    │
│  │  │ Build        │  │ (Sharp)      │  │ (PostCSS/Tailwind)       │  │    │
│  │  └──────────────┘  └──────────────┘  └──────────────────────────┘  │    │
│  │                                                                      │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                      DEPLOYMENT LAYER                                │    │
│  │                                                                      │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐  │    │
│  │  │ GitHub       │  │ Cloudflare   │  │ CDN (300+ Edge Nodes)    │  │    │
│  │  │ Actions      │  │ Pages        │  │ Auto HTTPS + HTTP/3      │  │    │
│  │  └──────────────┘  └──────────────┘  └──────────────────────────┘  │    │
│  │                                                                      │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Multi-Client Architecture Pattern

```
┌──────────────────────────────────────────────────────────────────────┐
│                    MULTI-CLIENT STRATEGY                              │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Strategy: "Fork & Configure" (Repository-Per-Client)                │
│                                                                       │
│  ┌─────────────────────┐                                             │
│  │  TEMPLATE REPO      │ ◄── Single source of truth                 │
│  │  (upstream)         │                                             │
│  └──────────┬──────────┘                                             │
│             │                                                         │
│      ┌──────┼────────────────────┐                                   │
│      │      │                    │                                    │
│      ▼      ▼                    ▼                                    │
│  ┌───────┐ ┌───────┐       ┌───────┐                                │
│  │Client │ │Client │  ...  │Client │                                 │
│  │  A    │ │  B    │       │  N    │                                 │
│  │(fork) │ │(fork) │       │(fork) │                                 │
│  └───┬───┘ └───┬───┘       └───┬───┘                                │
│      │         │                │                                     │
│      ▼         ▼                ▼                                     │
│  ┌───────┐ ┌───────┐       ┌───────┐                                │
│  │CF Page│ │CF Page│  ...  │CF Page│                                 │
│  │Site A │ │Site B │       │Site N │                                 │
│  └───────┘ └───────┘       └───────┘                                │
│                                                                       │
│  Benefits:                                                            │
│  • Each client has isolated repository                                │
│  • Template updates via `git pull upstream main`                      │
│  • Client content never conflicts with template changes              │
│  • Independent deployment per client                                  │
│  • CMS writes to client's own repo                                   │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

### 7.3 Data Flow

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │────▶│  Decap   │────▶│  GitHub  │────▶│Cloudflare│
│  Editor  │     │  CMS     │     │  Commit  │     │  Build   │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
                                                         │
                                                         ▼
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  End     │◀────│   CDN    │◀────│  Static  │◀────│  Astro   │
│  User    │     │  Edge    │     │  Assets  │     │  SSG     │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
```

---

## 8. System Components

### 8.1 Component Inventory

| Component             | Purpose                            | Technology                       | Responsibility                              |
| --------------------- | ---------------------------------- | -------------------------------- | ------------------------------------------- |
| Static Site Generator | Build HTML from templates + config | Astro                            | Convert components + content → static HTML  |
| Design System         | Consistent UI across all sites     | Tailwind CSS                     | Utility classes, responsive design, theming |
| Theme Engine          | Per-client brand customization     | CSS Custom Properties + Tailwind | Color, typography, spacing customization    |
| Content Layer         | Structured content storage         | YAML + Markdown + JSON           | Store all client-specific content           |
| CMS Interface         | Non-technical editing              | Decap CMS                        | Visual editing, image upload, preview       |
| Image Pipeline        | Optimization & responsive images   | Astro Image / Sharp              | Resize, compress, format conversion         |
| Build System          | Static site generation             | Astro Build + Vite               | Compile, optimize, bundle                   |
| CI/CD                 | Automated testing & deployment     | GitHub Actions                   | Lint, build, test, deploy                   |
| Hosting               | Serve static files globally        | Cloudflare Pages                 | CDN, HTTPS, custom domains                  |
| Source Control        | Version control & collaboration    | GitHub                           | Code storage, PRs, branching                |

### 8.2 Component Interaction Diagram

```
┌────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌────────────┐         ┌────────────┐                       │
│   │   Astro    │◄────────│  Tailwind  │                       │
│   │ Components │         │    CSS     │                       │
│   └─────┬──────┘         └────────────┘                       │
│         │                                                      │
│         │ reads                                                 │
│         ▼                                                      │
│   ┌────────────┐         ┌────────────┐                       │
│   │   Content  │◄────────│  Decap CMS │◄──── Client Editor   │
│   │   Files    │  writes │  (Browser) │                       │
│   └─────┬──────┘         └────────────┘                       │
│         │                                                      │
│         │ input to                                              │
│         ▼                                                      │
│   ┌────────────┐         ┌────────────┐                       │
│   │ Astro Build│────────▶│   Static   │                       │
│   │  (Vite)   │         │   Output   │                       │
│   └────────────┘         └─────┬──────┘                       │
│                                │                               │
│                                │ deployed to                   │
│                                ▼                               │
│                          ┌────────────┐                       │
│                          │ Cloudflare │                       │
│                          │   Pages    │                       │
│                          └────────────┘                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 8.3 Shared Components Library

| Component      | Description                         | Configurable Properties                                  |
| -------------- | ----------------------------------- | -------------------------------------------------------- |
| `Header`       | Navigation with logo and CTA        | Logo, nav items, CTA text/link, sticky behavior          |
| `Hero`         | Full-width banner with text overlay | Image/video, headline, subheadline, CTA, overlay opacity |
| `About`        | Company introduction section        | Title, description, image, stats                         |
| `Services`     | Grid/list of service offerings      | Icon, title, description, link (repeatable)              |
| `Gallery`      | Responsive image grid with lightbox | Images array, columns, lightbox enabled                  |
| `Testimonials` | Client testimonials display         | Name, role, company, quote, avatar (repeatable)          |
| `FAQ`          | Expandable question/answer pairs    | Question, answer (repeatable)                            |
| `Contact`      | Contact form and information        | Phone, email, address, map, form fields                  |
| `Footer`       | Site footer with links and social   | Logo, links, social icons, copyright                     |
| `SEOHead`      | Meta tags and structured data       | Title, description, OG image, schema type                |

---

## 9. Technology Evaluation Matrix

### 9.1 Static Site Generator Comparison

| Criteria                | Weight | Astro                        | Angular (SSG)                 |
| ----------------------- | ------ | ---------------------------- | ----------------------------- |
| **Build Performance**   | 15%    | ★★★★★ (< 5s builds)          | ★★★☆☆ (30-60s builds)         |
| **Bundle Size**         | 15%    | ★★★★★ (Zero JS default)      | ★★☆☆☆ (100KB+ framework)      |
| **Learning Curve**      | 10%    | ★★★★☆ (HTML-like)            | ★★★☆☆ (Complex framework)     |
| **SEO Capability**      | 15%    | ★★★★★ (Pure HTML output)     | ★★★☆☆ (Requires prerendering) |
| **Component System**    | 10%    | ★★★★★ (Multi-framework)      | ★★★★★ (Full featured)         |
| **Content Integration** | 15%    | ★★★★★ (Built-in collections) | ★★☆☆☆ (Manual implementation) |
| **CMS Compatibility**   | 10%    | ★★★★★ (Decap, Tina native)   | ★★☆☆☆ (Limited options)       |
| **Ecosystem/Plugins**   | 5%     | ★★★★☆ (Growing rapidly)      | ★★★★★ (Mature ecosystem)      |
| **Static Output**       | 5%     | ★★★★★ (Native SSG)           | ★★★☆☆ (SSG is secondary)      |
| **Total Score**         | 100%   | **4.65 / 5**                 | **2.85 / 5**                  |

### 9.2 CSS Framework Comparison

| Criteria             | Tailwind CSS    | Bootstrap | Plain CSS |
| -------------------- | --------------- | --------- | --------- |
| Bundle Size (purged) | ~10KB           | ~25KB     | Variable  |
| Customization        | Excellent       | Good      | Unlimited |
| Theming via Config   | Native          | Limited   | Manual    |
| Responsive Utilities | Excellent       | Good      | Manual    |
| Community/Docs       | Excellent       | Excellent | N/A       |
| Learning Curve       | Moderate        | Easy      | N/A       |
| **Recommendation**   | **✅ Selected** | —         | —         |

### 9.3 CMS Comparison

| Criteria                | Weight | Decap CMS         | TinaCMS              | File-Based (Manual) |
| ----------------------- | ------ | ----------------- | -------------------- | ------------------- |
| **No Backend Required** | 20%    | ★★★★★             | ★★★★☆                | ★★★★★               |
| **Git-Based**           | 15%    | ★★★★★             | ★★★★★                | ★★★★★               |
| **Visual Editing**      | 15%    | ★★★★☆             | ★★★★★                | ★☆☆☆☆               |
| **Free Tier**           | 15%    | ★★★★★ (100% free) | ★★★☆☆ (Limited free) | ★★★★★               |
| **Setup Complexity**    | 10%    | ★★★★☆             | ★★★☆☆                | ★★★★★               |
| **Non-Tech Friendly**   | 15%    | ★★★★☆             | ★★★★★                | ★☆☆☆☆               |
| **Image Handling**      | 10%    | ★★★★☆             | ★★★★☆                | ★★☆☆☆               |
| **Total Score**         | 100%   | **4.40 / 5**      | **4.05 / 5**         | **3.30 / 5**        |

### 9.4 Hosting Comparison

| Criteria           | Cloudflare Pages            | GitHub Pages    | Netlify          | Vercel    |
| ------------------ | --------------------------- | --------------- | ---------------- | --------- |
| Free Tier Limits   | 500 builds/mo, unlimited BW | Unlimited       | 300 build min/mo | 100GB BW  |
| Custom Domains     | ✅ Unlimited                | ✅ (1 per repo) | ✅               | ✅        |
| Auto HTTPS         | ✅                          | ✅              | ✅               | ✅        |
| CDN Quality        | ★★★★★ (300+ PoPs)           | ★★★☆☆           | ★★★★☆            | ★★★★☆     |
| Build Integration  | ✅ Native                   | ✅ Actions      | ✅ Native        | ✅ Native |
| Preview Deploys    | ✅                          | ❌              | ✅               | ✅        |
| Scalability (Free) | Excellent                   | Good            | Limited          | Limited   |
| **Recommendation** | **✅ Selected**             | Fallback        | —                | —         |

### 9.5 Full Stack Comparison: Option A vs Option B

| Dimension                | Option A (Astro + Decap)       | Option B (Angular + File Config)    |
| ------------------------ | ------------------------------ | ----------------------------------- |
| **Purpose Fit**          | Built for static content sites | Built for complex web apps          |
| **Output**               | Pure HTML/CSS, zero JS         | Large JS bundle required            |
| **SEO**                  | Native, excellent              | Requires extra configuration        |
| **Performance**          | Lighthouse 95-100 achievable   | Lighthouse 70-85 typical for static |
| **CMS Integration**      | Native, well-documented        | Requires custom implementation      |
| **Content Workflow**     | Non-technical users can edit   | Developer-only changes              |
| **Build Speed**          | 2-10 seconds                   | 30-120 seconds                      |
| **Hosting Cost**         | $0                             | $0                                  |
| **Developer Experience** | Simple, HTML-first             | Over-engineered for the task        |
| **Multi-Client Scale**   | Easy (content isolation)       | Complex (shared modules)            |
| **Maintenance**          | Low                            | High                                |

---

## 10. Final Technology Recommendation

### ✅ Recommended Stack: Option A (Enhanced)

```
┌──────────────────────────────────────────────────────┐
│  FINAL TECHNOLOGY STACK                               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Static Site Generator:  Astro v5+                   │
│  Styling:                Tailwind CSS v4+            │
│  CMS:                    Decap CMS                   │
│  Source Control:         GitHub                       │
│  Hosting:                Cloudflare Pages             │
│  CI/CD:                  GitHub Actions               │
│  Image Optimization:     Astro Image (Sharp)         │
│  Fonts:                  Fontsource (self-hosted)    │
│  Icons:                  Astro Icon (SVG)            │
│  Analytics:              Cloudflare Web Analytics    │
│                          (free, privacy-friendly)    │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Rationale

| Factor                                 | Decision Rationale                                                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Astro over Angular**                 | Purpose-built for content sites. Zero client JS by default. Native content collections. 10x faster builds. Native CMS integration.          |
| **Decap CMS over TinaCMS**             | 100% free, no vendor lock-in, Git-based, no external service dependency, simpler setup, proven at scale.                                    |
| **Cloudflare Pages over alternatives** | Best free tier (unlimited bandwidth, 500 builds/month), superior global CDN (300+ PoPs), native custom domain support, preview deployments. |
| **Tailwind over alternatives**         | Perfect for utility-driven theming, tiny purged output, native config-based customization, excellent responsive utilities.                  |

### Why NOT Angular for This Use Case

| Concern            | Explanation                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| Over-engineering   | Angular's dependency injection, modules, services are unnecessary for static content display |
| Bundle size        | Minimum ~80KB+ for Angular runtime vs 0KB with Astro                                         |
| Build time         | Angular CLI builds take 30-120s vs Astro's 2-10s                                             |
| CMS integration    | No native Git-based CMS integration; would require custom solution                           |
| SEO complexity     | Requires Angular Universal/prerendering; Astro is HTML-first                                 |
| Maintenance burden | Angular major versions require migration effort; Astro is simpler                            |

**Angular remains excellent for:** dashboards, SPAs, complex interactive applications, enterprise apps with forms/state management. It is not optimal for static content websites.

---

## 11. Folder Structure

### 11.1 Template Repository Structure

```
website-template/
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Production deployment
│       ├── preview.yml             # Preview deployment on PR
│       └── lighthouse.yml          # Performance checks
├── public/
│   ├── admin/
│   │   ├── index.html             # Decap CMS entry point
│   │   └── config.yml             # CMS field configuration
│   ├── fonts/                     # Self-hosted fonts
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Gallery.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── SEOHead.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── Section.astro
│   │       ├── Container.astro
│   │       └── Icon.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro       # HTML shell with SEO head
│   │   └── PageLayout.astro       # Standard page wrapper
│   ├── pages/
│   │   ├── index.astro            # Home page
│   │   ├── about.astro            # About page
│   │   ├── services.astro         # Services page
│   │   ├── gallery.astro          # Gallery/Portfolio page
│   │   ├── contact.astro          # Contact page
│   │   └── 404.astro              # Custom 404
│   ├── styles/
│   │   ├── global.css             # Global styles + Tailwind imports
│   │   └── theme.css              # CSS custom properties from config
│   └── utils/
│       ├── config.ts              # Config loader utility
│       └── seo.ts                 # SEO helper functions
├── content/
│   ├── site.yaml                  # ⭐ Main site configuration
│   ├── pages/
│   │   ├── home.yaml              # Home page content
│   │   ├── about.yaml             # About page content
│   │   ├── services.yaml          # Services content
│   │   └── contact.yaml           # Contact content
│   ├── collections/
│   │   ├── services/              # Individual service entries
│   │   ├── testimonials/          # Testimonial entries
│   │   ├── gallery/               # Gallery items
│   │   └── faq/                   # FAQ entries
│   └── assets/
│       ├── logo.svg               # Client logo
│       ├── hero-banner.jpg        # Hero image
│       ├── hero-video.mp4         # Hero video (optional)
│       ├── gallery/               # Gallery images
│       └── team/                  # Team member photos
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # Tailwind configuration (reads site.yaml)
├── package.json
├── tsconfig.json
└── README.md                      # Setup & onboarding guide
```

### 11.2 Per-Client Differences

Only the `content/` directory differs between client sites:

```
┌─────────────────────────────────────┐
│  SHARED (Template)                   │  UNIQUE (Per Client)
├─────────────────────────────────────┤  ┌─────────────────────┐
│  src/components/*                    │  │ content/site.yaml   │
│  src/layouts/*                       │  │ content/pages/*     │
│  src/pages/*                         │  │ content/collections/│
│  src/styles/*                        │  │ content/assets/*    │
│  src/utils/*                         │  │ public/admin/       │
│  public/fonts/*                      │  │   config.yml        │
│  .github/workflows/*                 │  └─────────────────────┘
│  astro.config.mjs                    │
│  tailwind.config.mjs                 │
│  package.json                        │
└─────────────────────────────────────┘
```

---

## 12. Configuration Strategy

### 12.1 Primary Configuration File: `content/site.yaml`

```yaml
# ============================================
# SITE CONFIGURATION
# This is the single source of truth for all
# client-specific settings.
# ============================================

# --- Brand Identity ---
brand:
  name: "Wanderlust Travel Agency"
  tagline: "Explore the World with Us"
  description: "Premium travel experiences curated for the modern explorer."
  foundedYear: 2015
  logo: "/assets/logo.svg"
  favicon: "/favicon.svg"

# --- Theme / Colors ---
theme:
  colors:
    primary: "#2563EB" # Main brand color
    secondary: "#1E40AF" # Darker variant
    accent: "#F59E0B" # Highlight/CTA color
    neutral: "#1F2937" # Text color
    background: "#FFFFFF" # Page background
    surface: "#F9FAFB" # Card/section background
  fonts:
    heading: "Inter"
    body: "Inter"
  borderRadius: "0.5rem" # Global border radius

# --- Navigation ---
navigation:
  items:
    - label: "Home"
      href: "/"
    - label: "About"
      href: "/about"
    - label: "Services"
      href: "/services"
    - label: "Gallery"
      href: "/gallery"
    - label: "Contact"
      href: "/contact"
  cta:
    label: "Book Now"
    href: "/contact"

# --- Hero Section ---
hero:
  headline: "Discover Your Next Adventure"
  subheadline: "Curated travel packages to 50+ destinations worldwide"
  backgroundImage: "/assets/hero-banner.jpg"
  backgroundVideo: "/assets/hero-video.mp4" # Optional
  overlay: 0.5 # Overlay opacity
  cta:
    primary:
      label: "Explore Packages"
      href: "/services"
    secondary:
      label: "Contact Us"
      href: "/contact"

# --- Contact Information ---
contact:
  phone: "+91 98765 43210"
  email: "hello@wanderlusttravel.com"
  address: "123 Travel Lane, Mumbai, Maharashtra, India"
  mapEmbed: "https://maps.google.com/..."
  workingHours: "Mon-Sat: 9:00 AM - 6:00 PM"

# --- Social Media ---
social:
  facebook: "https://facebook.com/wanderlust"
  instagram: "https://instagram.com/wanderlust"
  twitter: "https://twitter.com/wanderlust"
  linkedin: ""
  youtube: "https://youtube.com/wanderlust"
  whatsapp: "+919876543210"

# --- SEO ---
seo:
  titleTemplate: "%s | Wanderlust Travel"
  defaultTitle: "Wanderlust Travel - Explore the World"
  defaultDescription: "Premium travel experiences and curated tour packages."
  ogImage: "/assets/og-image.jpg"
  locale: "en_IN"
  siteUrl: "https://www.wanderlusttravel.com"
  googleVerification: ""

# --- Section Visibility ---
sections:
  hero: true
  about: true
  services: true
  gallery: true
  testimonials: true
  faq: true
  contact: true
  newsletter: false

# --- Analytics ---
analytics:
  cloudflareToken: "" # Cloudflare Web Analytics
  googleAnalyticsId: "" # Optional GA4
```

### 12.2 Content Collection Structure

**Services** (`content/collections/services/tour-packages.md`):

```yaml
---
title: "Tour Packages"
icon: "map"
description: "Curated travel packages to exotic destinations."
order: 1
featured: true
---
```

**Testimonials** (`content/collections/testimonials/john-doe.md`):

```yaml
---
name: "John Doe"
role: "CEO"
company: "TechCorp"
avatar: "/assets/testimonials/john.jpg"
rating: 5
order: 1
---
"The best travel experience we've ever had. Highly recommended!"
```

**FAQ** (`content/collections/faq/booking-process.md`):

```yaml
---
question: "How do I book a tour package?"
order: 1
category: "Booking"
---
Simply browse our packages, select your preferred option, and click "Book Now". Our team will contact you within 24 hours.
```

### 12.3 Theme Engine Flow

```
site.yaml (colors)
       │
       ▼
tailwind.config.mjs ──── reads YAML ──── generates Tailwind theme
       │
       ▼
CSS Custom Properties ──── :root { --color-primary: #2563EB; }
       │
       ▼
Components use ──── class="bg-primary text-white"
                    or style="color: var(--color-primary)"
```

---

## 13. CMS Design

### 13.1 Decap CMS Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      DECAP CMS FLOW                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐ │
│  │  Client  │───▶│  CMS UI  │───▶│  GitHub  │───▶│Cloudflare│ │
│  │  Login   │    │ (Browser)│    │  API     │    │  Rebuild │ │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘ │
│       │                │                │               │       │
│       │                │                │               │       │
│       ▼                ▼                ▼               ▼       │
│  GitHub OAuth    Edit YAML/MD     Git Commit      Deploy Site  │
│  (No password)   Visual Editor    Auto-push       2-3 minutes  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 13.2 CMS Configuration (`public/admin/config.yml`)

```yaml
backend:
  name: github
  repo: "agency-name/client-site"
  branch: main

media_folder: "content/assets"
public_folder: "/assets"

collections:
  - name: "site-settings"
    label: "Site Settings"
    files:
      - name: "general"
        label: "General Settings"
        file: "content/site.yaml"
        fields:
          - { label: "Business Name", name: "brand.name", widget: "string" }
          - { label: "Tagline", name: "brand.tagline", widget: "string" }
          - { label: "Logo", name: "brand.logo", widget: "image" }
          - {
              label: "Primary Color",
              name: "theme.colors.primary",
              widget: "color",
            }
          - { label: "Phone", name: "contact.phone", widget: "string" }
          - { label: "Email", name: "contact.email", widget: "string" }

  - name: "services"
    label: "Services"
    folder: "content/collections/services"
    create: true
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Icon", name: "icon", widget: "select", options: [...] }
      - { label: "Description", name: "description", widget: "text" }
      - { label: "Order", name: "order", widget: "number" }
      - { label: "Body", name: "body", widget: "markdown" }

  - name: "testimonials"
    label: "Testimonials"
    folder: "content/collections/testimonials"
    create: true
    fields:
      - { label: "Client Name", name: "name", widget: "string" }
      - { label: "Role", name: "role", widget: "string" }
      - { label: "Company", name: "company", widget: "string" }
      - { label: "Photo", name: "avatar", widget: "image" }
      - { label: "Rating", name: "rating", widget: "number", min: 1, max: 5 }
      - { label: "Testimonial", name: "body", widget: "markdown" }

  - name: "gallery"
    label: "Gallery"
    folder: "content/collections/gallery"
    create: true
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Image", name: "image", widget: "image" }
      - { label: "Category", name: "category", widget: "string" }
      - { label: "Order", name: "order", widget: "number" }

  - name: "faq"
    label: "FAQ"
    folder: "content/collections/faq"
    create: true
    fields:
      - { label: "Question", name: "question", widget: "string" }
      - { label: "Category", name: "category", widget: "string" }
      - { label: "Order", name: "order", widget: "number" }
      - { label: "Answer", name: "body", widget: "markdown" }
```

### 13.3 CMS Access Control

| Role              | Capabilities                  | Authentication                |
| ----------------- | ----------------------------- | ----------------------------- |
| Admin (Developer) | Full access, deploy, settings | GitHub account (repo owner)   |
| Editor (Client)   | Content editing, image upload | GitHub account (collaborator) |
| Viewer            | Preview only                  | GitHub account (read access)  |

### 13.4 CMS User Experience

**What the client sees:**

1. Navigate to `yoursite.com/admin`
2. Login with GitHub (one-click OAuth)
3. Dashboard showing editable sections
4. Click section → visual form editor
5. Upload images via drag-and-drop
6. Preview changes before publishing
7. Click "Publish" → site updates in 2-3 minutes

---

## 14. Deployment Strategy

### 14.1 Deployment Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT PIPELINE                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Developer Push / CMS Edit                                        │
│         │                                                         │
│         ▼                                                         │
│  ┌─────────────┐                                                 │
│  │   GitHub    │                                                  │
│  │   (main)   │                                                  │
│  └──────┬──────┘                                                 │
│         │                                                         │
│         ├────────────────────────┐                                │
│         │                        │                                │
│         ▼                        ▼                                │
│  ┌─────────────┐         ┌─────────────┐                        │
│  │  GitHub     │         │ Cloudflare  │                         │
│  │  Actions    │         │ Pages Build │                         │
│  │  (CI/Test)  │         │ (Deploy)    │                         │
│  └──────┬──────┘         └──────┬──────┘                        │
│         │                        │                                │
│         ▼                        ▼                                │
│  ┌─────────────┐         ┌─────────────┐                        │
│  │ Lighthouse  │         │   CDN Edge  │                         │
│  │ + Lint      │         │  (300+ PoPs)│                         │
│  │ Checks      │         │             │                         │
│  └─────────────┘         └─────────────┘                        │
│                                  │                                │
│                                  ▼                                │
│                           ┌─────────────┐                        │
│                           │  Custom     │                         │
│                           │  Domain     │                         │
│                           │  + HTTPS    │                         │
│                           └─────────────┘                        │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

### 14.2 Cloudflare Pages Configuration

| Setting                | Value                                    |
| ---------------------- | ---------------------------------------- |
| Production Branch      | `main`                                   |
| Build Command          | `npm run build`                          |
| Build Output Directory | `dist`                                   |
| Node.js Version        | 20.x                                     |
| Preview Branches       | `dev`, `staging`, `feature/*`            |
| Custom Domain          | Client's domain (CNAME)                  |
| HTTPS                  | Automatic (Let's Encrypt via Cloudflare) |

### 14.3 Domain Setup Process

```
1. Client purchases domain (e.g., Namecheap, GoDaddy, Cloudflare Registrar)
2. Add CNAME record: www → client-site.pages.dev
3. Add A record (or CNAME for root): @ → Cloudflare Pages
4. In Cloudflare Pages → Settings → Custom Domains → Add domain
5. Automatic SSL provisioning (< 5 minutes)
6. Verify HTTPS working
```

### 14.4 Environment Strategy

| Environment | Branch      | URL                             | Purpose          |
| ----------- | ----------- | ------------------------------- | ---------------- |
| Production  | `main`      | `clientsite.com`                | Live client site |
| Preview     | PR branches | `hash.client-site.pages.dev`    | Pre-merge review |
| Staging     | `staging`   | `staging.client-site.pages.dev` | Client approval  |

---

## 15. CI/CD Strategy

### 15.1 GitHub Actions Workflow: Deploy

```yaml
# .github/workflows/deploy.yml
name: Build & Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  lighthouse:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v11
        with:
          configPath: "./lighthouserc.json"
          temporaryPublicStorage: true
```

### 15.2 Quality Gates

| Gate                     | Tool          | Threshold         | Blocks Deploy |
| ------------------------ | ------------- | ----------------- | ------------- |
| Build Success            | Astro Build   | Exit code 0       | Yes           |
| Lighthouse Performance   | Lighthouse CI | ≥ 90              | Yes           |
| Lighthouse Accessibility | Lighthouse CI | ≥ 90              | Yes           |
| Lighthouse SEO           | Lighthouse CI | ≥ 95              | Yes           |
| HTML Validation          | html-validate | 0 errors          | No (warning)  |
| Link Checking            | lychee        | 0 broken links    | No (warning)  |
| Image Size               | Custom script | < 500KB per image | Yes           |

### 15.3 Automation Triggers

| Trigger           | Action                           | Result                 |
| ----------------- | -------------------------------- | ---------------------- |
| Push to `main`    | Full build + deploy              | Production update      |
| Pull Request      | Build + Lighthouse + Preview URL | Review feedback        |
| CMS Save          | Commit to `main`                 | Triggers full pipeline |
| Schedule (weekly) | Dependency audit                 | Security alerts        |
| Template update   | Manual sync PR                   | Propagate improvements |

---

## 16. SEO Strategy

### 16.1 Technical SEO Checklist

| Element                   | Implementation                       | Status                 |
| ------------------------- | ------------------------------------ | ---------------------- |
| Meta Title                | Per-page from YAML config            | Auto-generated         |
| Meta Description          | Per-page from YAML config            | Auto-generated         |
| Open Graph Tags           | Auto-generated from config           | Built into SEOHead     |
| Twitter Cards             | Auto-generated from config           | Built into SEOHead     |
| Canonical URLs            | Auto-generated per page              | Built into BaseLayout  |
| Sitemap.xml               | Auto-generated at build              | Astro integration      |
| robots.txt                | Static file in public/               | Pre-configured         |
| Structured Data (JSON-LD) | LocalBusiness schema                 | Auto from config       |
| Semantic HTML             | header, main, nav, article, section  | Component architecture |
| Heading Hierarchy         | H1 → H6 proper nesting               | Component design       |
| Alt Text                  | Required field in CMS for all images | CMS validation         |
| Page Speed                | Static HTML + CDN                    | Architecture choice    |
| Mobile Responsiveness     | Tailwind responsive utilities        | Design system          |
| HTTPS                     | Cloudflare auto-SSL                  | Hosting layer          |
| Core Web Vitals           | Optimized by default                 | Performance strategy   |

### 16.2 Structured Data Strategy

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{{brand.name}}",
  "description": "{{brand.description}}",
  "url": "{{seo.siteUrl}}",
  "telephone": "{{contact.phone}}",
  "email": "{{contact.email}}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{contact.address}}"
  },
  "sameAs": [
    "{{social.facebook}}",
    "{{social.instagram}}",
    "{{social.linkedin}}"
  ]
}
```

### 16.3 Image SEO

| Practice              | Implementation              |
| --------------------- | --------------------------- |
| Descriptive filenames | CMS naming convention       |
| Alt attributes        | Required CMS field          |
| Responsive srcset     | Astro Image auto-generation |
| WebP/AVIF formats     | Astro Image auto-conversion |
| Lazy loading          | Native `loading="lazy"`     |
| Explicit dimensions   | Width/height attributes     |

---

## 17. Performance Strategy

### 17.1 Performance Budget

| Resource          | Budget       | Strategy                               |
| ----------------- | ------------ | -------------------------------------- |
| HTML              | < 50KB       | Minimal, semantic markup               |
| CSS               | < 15KB       | Tailwind purge + minification          |
| JavaScript        | < 10KB       | Zero JS default, minimal interactivity |
| Images (hero)     | < 200KB      | WebP, responsive, preloaded            |
| Images (gallery)  | < 100KB each | WebP, lazy loaded, srcset              |
| Fonts             | < 50KB       | Subset, preloaded, swap                |
| Total Page Weight | < 500KB      | Combined budget                        |

### 17.2 Optimization Techniques

```
┌──────────────────────────────────────────────────────────────┐
│  PERFORMANCE OPTIMIZATION LAYERS                              │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  BUILD TIME:                                                  │
│  ├── CSS purging (Tailwind removes unused styles)            │
│  ├── HTML minification                                        │
│  ├── Image optimization (Sharp: resize, compress, WebP/AVIF) │
│  ├── Font subsetting                                          │
│  └── Asset hashing (cache busting)                           │
│                                                               │
│  DELIVERY:                                                    │
│  ├── CDN edge caching (Cloudflare 300+ PoPs)                │
│  ├── Brotli compression                                      │
│  ├── HTTP/2 & HTTP/3                                         │
│  ├── Cache-Control headers (immutable for hashed assets)     │
│  └── Early hints (103)                                       │
│                                                               │
│  RUNTIME:                                                     │
│  ├── Lazy loading images (native loading="lazy")             │
│  ├── Intersection Observer for animations                     │
│  ├── Preload critical assets (hero image, fonts)             │
│  ├── DNS prefetch for external resources                      │
│  └── No render-blocking JavaScript                           │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### 17.3 Image Pipeline

```
Original Upload (e.g., 4000x3000 JPEG, 3MB)
       │
       ▼
┌─────────────────────────────────────┐
│  Astro Image Processing (Build)     │
│  ├── Resize: 320, 640, 1024, 1920  │
│  ├── Format: WebP + AVIF + fallback │
│  ├── Quality: 80%                   │
│  └── Generate srcset attributes     │
└─────────────────────────────────────┘
       │
       ▼
Output: Multiple optimized variants
  ├── hero-320w.webp (15KB)
  ├── hero-640w.webp (35KB)
  ├── hero-1024w.webp (70KB)
  └── hero-1920w.webp (150KB)
```

---

## 18. Security Strategy

### 18.1 Threat Model

| Threat                     | Risk Level | Mitigation                                         |
| -------------------------- | ---------- | -------------------------------------------------- |
| XSS (Cross-Site Scripting) | Low        | Static HTML, no user input processing at runtime   |
| Content Injection via CMS  | Medium     | GitHub authentication, branch protection           |
| Unauthorized CMS Access    | Medium     | GitHub OAuth, repo-level permissions               |
| Image Upload Abuse         | Low        | File type validation, size limits in CMS config    |
| Domain Hijacking           | Low        | Cloudflare DNS security, registrar lock            |
| Supply Chain Attack        | Medium     | Lock file, Dependabot alerts, minimal dependencies |
| DDoS                       | Low        | Cloudflare DDoS protection (included free)         |

### 18.2 Content Security

| Control                 | Implementation                    |
| ----------------------- | --------------------------------- |
| Content Security Policy | HTTP header via `_headers` file   |
| Permissions Policy      | Restrict unnecessary browser APIs |
| X-Frame-Options         | DENY (prevent clickjacking)       |
| X-Content-Type-Options  | nosniff                           |
| Referrer-Policy         | strict-origin-when-cross-origin   |
| HTTPS enforcement       | Cloudflare Always Use HTTPS       |

**`_headers` file (Cloudflare Pages):**

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' https://identity.netlify.com; frame-src https://github.com
```

### 18.3 CMS Access Controls

| Layer             | Control                                                     |
| ----------------- | ----------------------------------------------------------- |
| Authentication    | GitHub OAuth (no custom passwords)                          |
| Authorization     | GitHub repository collaborator role                         |
| Branch Protection | Require PR reviews for template changes                     |
| File Restrictions | CMS can only edit `content/` directory                      |
| Media Limits      | Max file size: 5MB, allowed types: jpg, png, webp, svg, mp4 |
| Audit Trail       | Full Git history of all changes                             |
| Rollback          | `git revert` any unwanted change                            |

### 18.4 Upload Security

| Rule                  | Implementation                                                        |
| --------------------- | --------------------------------------------------------------------- |
| Allowed file types    | `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.gif`, `.mp4`              |
| Maximum file size     | 5MB per file                                                          |
| No executable uploads | CMS config restriction                                                |
| SVG sanitization      | Build-time sanitization of SVG content                                |
| Image processing      | All images re-encoded through Sharp (strips EXIF, malicious payloads) |

### 18.5 Deployment Security

| Control             | Implementation                           |
| ------------------- | ---------------------------------------- |
| Repository access   | Private repos, minimal collaborators     |
| Deploy permissions  | Only `main` branch deploys to production |
| Secrets management  | GitHub Encrypted Secrets for tokens      |
| Dependency scanning | Dependabot automated alerts              |
| Build isolation     | Cloudflare Pages sandboxed builds        |
| No server-side code | Zero attack surface (pure static files)  |

---

## 19. Monitoring Strategy

### 19.1 Monitoring Stack (Free Tier)

| Layer       | Tool                            | Cost | Purpose                              |
| ----------- | ------------------------------- | ---- | ------------------------------------ |
| Analytics   | Cloudflare Web Analytics        | Free | Traffic, page views, Core Web Vitals |
| Uptime      | Cloudflare Health Checks        | Free | Availability monitoring              |
| Performance | Lighthouse CI (GitHub Actions)  | Free | Build-time performance checks        |
| Errors      | Browser console (via analytics) | Free | Client-side error tracking           |
| Security    | Cloudflare Security Events      | Free | DDoS, bot traffic                    |
| SEO         | Google Search Console           | Free | Search performance, indexing         |
| Build       | GitHub Actions logs             | Free | Deployment success/failure           |

### 19.2 Alerting Strategy

| Event                    | Alert Channel               | Priority |
| ------------------------ | --------------------------- | -------- |
| Build failure            | GitHub notification + email | High     |
| Lighthouse score drop    | GitHub PR comment           | Medium   |
| Domain expiry (30 days)  | Manual calendar reminder    | High     |
| Dependency vulnerability | Dependabot PR               | Medium   |
| Traffic anomaly          | Cloudflare dashboard        | Low      |

### 19.3 Health Check Dashboard

```
┌──────────────────────────────────────────────────────┐
│  CLIENT SITES HEALTH OVERVIEW                         │
├────────────┬────────┬────────┬─────────┬─────────────┤
│  Client    │ Status │ LH Score│ Last Deploy│ Domain  │
├────────────┼────────┼────────┼─────────┼─────────────┤
│  Travel Co │  ✅    │  97     │ 2h ago  │ ✅ Valid   │
│  RealEst   │  ✅    │  95     │ 1d ago  │ ✅ Valid   │
│  FitCoach  │  ✅    │  93     │ 3d ago  │ ⚠️ Exp 30d │
│  Interior  │  ✅    │  96     │ 5h ago  │ ✅ Valid   │
└────────────┴────────┴────────┴─────────┴─────────────┘
```

---

## 20. Backup Strategy

### 20.1 Backup Layers

| Layer             | Mechanism                     | Recovery Time               |
| ----------------- | ----------------------------- | --------------------------- |
| Source Code       | GitHub (distributed Git)      | Instant (clone)             |
| Content           | GitHub (versioned in repo)    | Instant (git checkout)      |
| Media Assets      | GitHub + Cloudflare CDN cache | Minutes                     |
| Configuration     | GitHub (YAML files versioned) | Instant                     |
| Deployment Config | Cloudflare Pages settings     | Manual reconfigure (15 min) |
| Domain Config     | DNS records documented        | Manual reconfigure (30 min) |

### 20.2 Recovery Procedures

| Scenario                    | Recovery Step                           | RTO                      |
| --------------------------- | --------------------------------------- | ------------------------ |
| Accidental content deletion | `git revert <commit>`                   | 5 minutes                |
| Bad deployment              | Cloudflare rollback to previous deploy  | 2 minutes                |
| Repository corruption       | Clone from another collaborator's local | 10 minutes               |
| Domain DNS issue            | Reconfigure DNS records                 | 30 minutes + propagation |
| Cloudflare outage           | Serve from GitHub Pages (fallback)      | 15 minutes               |
| Complete platform loss      | Re-deploy from Git clone                | 30 minutes               |

### 20.3 Data Retention

| Data Type          | Retention  | Location         |
| ------------------ | ---------- | ---------------- |
| Git history        | Indefinite | GitHub           |
| Deployment history | 90 days    | Cloudflare Pages |
| Analytics          | 6 months   | Cloudflare       |
| Build logs         | 90 days    | GitHub Actions   |

---

## 21. Cost Analysis

### 21.1 Per-Client Cost Breakdown

| Service                        | Free Tier Limits                             | Cost at Scale (50 sites)  |
| ------------------------------ | -------------------------------------------- | ------------------------- |
| **GitHub** (repos)             | Unlimited private repos                      | $0                        |
| **Cloudflare Pages** (hosting) | 500 builds/mo, unlimited BW, unlimited sites | $0                        |
| **Cloudflare DNS**             | Unlimited domains                            | $0                        |
| **Cloudflare SSL**             | Unlimited certificates                       | $0                        |
| **Cloudflare Analytics**       | Unlimited sites                              | $0                        |
| **Decap CMS**                  | Unlimited (client-side)                      | $0                        |
| **GitHub Actions** (CI)        | 2,000 min/mo (free tier)                     | $0 (within limits)        |
| **Domain Registration**        | —                                            | $10-15/year (client pays) |
| **TOTAL PLATFORM COST**        | —                                            | **$0/month**              |

### 21.2 Cost Comparison vs Alternatives

| Solution                      | Monthly Cost (10 sites) | Monthly Cost (50 sites) |
| ----------------------------- | ----------------------- | ----------------------- |
| **This Platform**             | $0                      | $0                      |
| WordPress (shared hosting)    | $50-100                 | $250-500                |
| Squarespace                   | $160-320                | $800-1600               |
| Wix                           | $140-250                | $700-1250               |
| Custom development (per site) | N/A                     | N/A                     |

### 21.3 Revenue Potential

| Model               | Per Client | 10 Clients | 50 Clients |
| ------------------- | ---------- | ---------- | ---------- |
| Setup Fee           | $300       | $3,000     | $15,000    |
| Monthly Maintenance | $75/mo     | $750/mo    | $3,750/mo  |
| Annual Revenue      | —          | $12,000    | $60,000    |
| Platform Cost       | —          | $0         | $0         |
| **Net Margin**      | —          | **100%**   | **100%**   |

### 21.4 Break-Even Analysis

| Investment                               | Amount                   |
| ---------------------------------------- | ------------------------ |
| Initial Development Time                 | 80-120 hours             |
| Developer Hourly Rate (opportunity cost) | $50-100/hr               |
| Total Investment                         | $4,000-12,000 equivalent |
| Break-even (at $300 setup + $75/mo)      | 5-10 clients             |

---

## 22. Risks and Mitigations

### 22.1 Risk Register

| ID   | Risk                                        | Probability | Impact | Severity | Mitigation                                                                      |
| ---- | ------------------------------------------- | ----------- | ------ | -------- | ------------------------------------------------------------------------------- |
| R-01 | Cloudflare Pages deprecates free tier       | Low         | High   | Medium   | Architecture supports easy migration to Netlify/Vercel                          |
| R-02 | Decap CMS becomes unmaintained              | Low         | Medium | Low      | TinaCMS as backup; content in standard Markdown/YAML                            |
| R-03 | Client accidentally breaks site via CMS     | Medium      | Low    | Low      | Git history enables instant rollback; CMS field validation                      |
| R-04 | Template update breaks client sites         | Medium      | High   | High     | Semantic versioning; test on staging; client repos control when to pull updates |
| R-05 | GitHub Actions free tier exceeded           | Low         | Low    | Low      | Cloudflare Pages has native builds as fallback                                  |
| R-06 | Client needs features beyond static site    | High        | Medium | Medium   | Document clear scope; offer upgrade path to dynamic solution                    |
| R-07 | SEO requirements exceed static capabilities | Low         | Medium | Low      | Static sites excel at SEO; edge functions for dynamic needs                     |
| R-08 | Image storage grows too large               | Medium      | Low    | Low      | Git LFS for large repos; image optimization reduces size                        |
| R-09 | Multiple developers causing merge conflicts | Low         | Low    | Low      | Clear folder ownership; content isolated from code                              |
| R-10 | Client domain lapses                        | Medium      | Medium | Medium   | Document renewal process; calendar reminders                                    |
| R-11 | Vendor lock-in to Cloudflare                | Low         | Medium | Low      | Standard static output deployable anywhere                                      |
| R-12 | Template becomes too complex to maintain    | Medium      | High   | High     | Keep scope narrow; avoid feature creep; document decisions                      |

### 22.2 Mitigation Strategies (Detail)

**R-04: Template Update Breaking Client Sites**

```
Strategy: Upstream Update Protocol
1. Template changes tagged with semantic versions (v1.0.0, v1.1.0, v2.0.0)
2. BREAKING changes only in major versions
3. Client repos explicitly choose when to merge upstream
4. Automated test suite runs post-merge
5. Staging preview before production deployment
6. Rollback procedure documented and tested
```

**R-06: Clients Needing Dynamic Features**

```
Upgrade Path:
├── Level 1: Static + CMS (this platform)
├── Level 2: Static + Cloudflare Workers (edge functions)
├── Level 3: Hybrid (Astro + API endpoints)
└── Level 4: Full dynamic application (separate project)
```

---

## 23. Implementation Roadmap

---

### Phase 0: Discovery & Architecture

**Duration:** 1 week  
**Effort:** 15-20 hours

#### Objectives

- Validate technology choices with proof-of-concept
- Finalize architecture decisions
- Define content schema for all supported verticals
- Establish development standards

#### Scope

| Item                          | Description                                            |
| ----------------------------- | ------------------------------------------------------ |
| Technology validation         | Install Astro, Tailwind, Decap CMS; verify integration |
| Content schema design         | Define YAML structure for all content types            |
| CMS field mapping             | Map all configurable content to CMS widgets            |
| Architecture decision records | Document all key decisions with rationale              |
| Vertical analysis             | Identify shared vs unique sections per vertical        |

#### Deliverables

- [ ] Architecture Decision Records (ADR) document
- [ ] Content schema specification (all YAML structures)
- [ ] CMS field mapping document
- [ ] Technology proof-of-concept (Astro + Tailwind + Decap hello world)
- [ ] Development environment setup guide
- [ ] Vertical requirements matrix

#### Acceptance Criteria

- Astro builds successfully with Tailwind CSS
- Decap CMS connects to GitHub and can edit a YAML file
- Content schema supports all 11 listed verticals
- Zero unresolved architecture questions

#### Risks

| Risk                         | Mitigation                            |
| ---------------------------- | ------------------------------------- |
| Analysis paralysis           | Time-box decisions to 2 hours each    |
| Scope creep in schema design | Focus on common 80%; edge cases later |

#### Dependencies

- GitHub account created
- Cloudflare account created
- Node.js 20+ installed locally

---

### Phase 1: Project Setup & Tooling

**Duration:** 3-4 days  
**Effort:** 20-25 hours

#### Objectives

- Initialize production-ready repository structure
- Configure all build tooling
- Establish code quality standards
- Set up CI/CD pipeline skeleton

#### Scope

| Item                      | Description                                   |
| ------------------------- | --------------------------------------------- |
| Repository initialization | Create GitHub repo with proper structure      |
| Astro project setup       | Initialize with TypeScript, Tailwind, sitemap |
| Tailwind configuration    | Theme tokens, responsive breakpoints, purging |
| ESLint + Prettier         | Code formatting and linting rules             |
| GitHub Actions            | Basic build + deploy workflow                 |
| Cloudflare Pages          | Connect repository, configure build           |
| Decap CMS scaffold        | Admin page with basic config                  |

#### Deliverables

- [ ] GitHub repository with complete folder structure
- [ ] Working `npm run dev` and `npm run build` commands
- [ ] Tailwind configured with theme extension points
- [ ] ESLint + Prettier configuration
- [ ] GitHub Actions workflow (build on push)
- [ ] Cloudflare Pages connected and deploying
- [ ] Decap CMS admin page accessible
- [ ] README with setup instructions
- [ ] `.env.example` and environment documentation

#### Acceptance Criteria

- `npm run build` produces static output in `dist/`
- Push to `main` triggers Cloudflare Pages deployment
- `yoursite.pages.dev` serves a page
- `yoursite.pages.dev/admin` shows Decap CMS login
- Lighthouse score > 95 on empty page
- All linting passes with zero errors

#### Risks

| Risk                             | Mitigation                           |
| -------------------------------- | ------------------------------------ |
| Cloudflare Pages build issues    | Test build command locally first     |
| Decap CMS OAuth setup complexity | Follow official GitHub backend guide |

#### Dependencies

- Phase 0 completed (architecture decisions final)
- GitHub OAuth application registered (for Decap CMS)

---

### Phase 2: Design System & Theme Engine

**Duration:** 1-1.5 weeks  
**Effort:** 30-40 hours

#### Objectives

- Build reusable UI component library
- Implement dynamic theming system
- Create responsive layout framework
- Ensure accessibility standards

#### Scope

| Item                         | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| CSS Custom Properties system | Generate from site.yaml at build time                 |
| Tailwind theme integration   | Extend Tailwind config from YAML values               |
| Base components              | Button, Card, Section, Container, Icon                |
| Layout components            | Header, Footer, BaseLayout, PageLayout                |
| Typography system            | Heading scales, body text, responsive sizes           |
| Color system                 | Primary, secondary, accent with auto-generated shades |
| Responsive framework         | Mobile-first breakpoints, container queries           |
| Accessibility                | Focus styles, ARIA patterns, color contrast           |
| Dark mode support (optional) | CSS custom properties toggle                          |

#### Deliverables

- [ ] Theme engine reading `site.yaml` and generating CSS variables
- [ ] Tailwind configuration dynamically extended from config
- [ ] 5+ base UI components (Button, Card, Section, Container, Icon)
- [ ] BaseLayout with proper HTML document structure
- [ ] Header component with responsive navigation
- [ ] Footer component with social links
- [ ] Typography scale (responsive, configurable)
- [ ] Accessibility audit passing (axe-core)
- [ ] Component documentation/showcase page

#### Acceptance Criteria

- Changing colors in `site.yaml` updates entire site theme
- All components render correctly at 320px, 768px, 1024px, 1440px
- Keyboard navigation works throughout
- Color contrast meets WCAG AA (4.5:1 minimum)
- Components accept content via props (no hardcoded text)
- Zero CSS specificity issues

#### Risks

| Risk                               | Mitigation                                        |
| ---------------------------------- | ------------------------------------------------- |
| Tailwind dynamic config complexity | Use CSS variables as fallback                     |
| Component over-abstraction         | Keep components flat; avoid premature abstraction |
| Accessibility gaps                 | Run axe-core in CI; manual keyboard testing       |

#### Dependencies

- Phase 1 completed (build pipeline working)
- Brand guidelines from at least one sample client

---

### Phase 3: Content Management & CMS Integration

**Duration:** 1 week  
**Effort:** 25-35 hours

#### Objectives

- Implement complete Decap CMS configuration
- Define all content collections
- Enable non-technical content editing
- Image upload and optimization pipeline

#### Scope

| Item                | Description                                      |
| ------------------- | ------------------------------------------------ |
| CMS config.yml      | Complete field definitions for all content types |
| Content collections | Services, testimonials, gallery, FAQ schemas     |
| Image handling      | Upload, validation, optimization pipeline        |
| CMS preview         | Real-time preview of content changes             |
| CMS customization   | Custom widgets if needed                         |
| Authentication      | GitHub OAuth flow configuration                  |
| Content validation  | Required fields, type checking                   |
| Editorial workflow  | Draft → Review → Published states                |

#### Deliverables

- [ ] Complete `public/admin/config.yml` with all collections
- [ ] Working CRUD for: site settings, services, testimonials, gallery, FAQ
- [ ] Image upload with automatic optimization
- [ ] CMS preview template matching site design
- [ ] GitHub OAuth authentication working
- [ ] Content validation rules (required fields, types)
- [ ] Editorial workflow (draft/publish states)
- [ ] CMS user guide documentation (for client handoff)
- [ ] Sample content populated for demo

#### Acceptance Criteria

- Non-technical user can log in and edit all content sections
- Image upload accepts jpg/png/webp, rejects other types
- Uploaded images appear correctly on the live site after rebuild
- Content changes committed to Git with meaningful messages
- Preview shows accurate representation of live site
- All required fields enforced (cannot publish incomplete content)

#### Risks

| Risk                                  | Mitigation                              |
| ------------------------------------- | --------------------------------------- |
| Decap CMS limitations for nested YAML | Flatten structure where needed          |
| GitHub OAuth token expiry             | Document re-authentication process      |
| Large image uploads slowing Git       | Implement size limits; consider Git LFS |

#### Dependencies

- Phase 2 completed (components ready to render content)
- GitHub OAuth App credentials configured
- Sample content prepared for testing

---

### Phase 4: Page Development & SEO

**Duration:** 1.5-2 weeks  
**Effort:** 40-50 hours

#### Objectives

- Build all standard pages using design system components
- Implement comprehensive SEO
- Optimize performance to meet targets
- Create page-specific content schemas

#### Scope

| Item                     | Description                            |
| ------------------------ | -------------------------------------- |
| Home page                | Hero + all configured sections         |
| About page               | Company story, team, values            |
| Services page            | Service grid/list with detail          |
| Gallery page             | Responsive grid with lightbox          |
| Contact page             | Form, map, contact info                |
| 404 page                 | Custom error page                      |
| SEO Head component       | Meta tags, OG, Twitter, JSON-LD        |
| Sitemap generation       | Automatic XML sitemap                  |
| robots.txt               | Proper crawler directives              |
| Performance optimization | Image srcset, lazy loading, preloading |
| Structured data          | LocalBusiness, BreadcrumbList schemas  |

#### Deliverables

- [ ] Home page with all configurable sections
- [ ] About page with company information
- [ ] Services page with dynamic service cards
- [ ] Gallery page with lightbox functionality
- [ ] Contact page with form and map
- [ ] Custom 404 page
- [ ] SEOHead component with full meta tag support
- [ ] JSON-LD structured data (auto-generated from config)
- [ ] XML sitemap (auto-generated)
- [ ] robots.txt configured
- [ ] Image optimization pipeline (srcset, WebP, lazy load)
- [ ] Performance audit report (Lighthouse > 90)

#### Acceptance Criteria

- All pages render correctly with sample content
- Lighthouse Performance > 90
- Lighthouse SEO > 95
- Lighthouse Accessibility > 90
- All pages mobile responsive (320px - 2560px)
- Structured data validates via Google Rich Results Test
- Sitemap accessible at `/sitemap.xml`
- No broken links (automated check)
- Total page weight < 500KB on initial load
- All images served as WebP with fallback

#### Risks

| Risk                                 | Mitigation                                        |
| ------------------------------------ | ------------------------------------------------- |
| Gallery lightbox requires JavaScript | Use minimal vanilla JS; Astro client directive    |
| Contact form needs backend           | Use Cloudflare Workers or third-party (Formspree) |
| Performance regression               | Lighthouse CI in pipeline; performance budgets    |

#### Dependencies

- Phase 3 completed (CMS populated with content)
- Sample images and content for all sections
- Google Search Console access (for verification)

---

### Phase 5: Deployment & CI/CD

**Duration:** 3-5 days  
**Effort:** 20-25 hours

#### Objectives

- Production-grade deployment pipeline
- Automated quality checks
- Preview deployments for PRs
- Documentation for operations

#### Scope

| Item                  | Description                        |
| --------------------- | ---------------------------------- |
| Production deployment | Automated on push to main          |
| Preview deployments   | Automatic preview URL for PRs      |
| Lighthouse CI         | Automated performance checks       |
| Security headers      | CSP, HSTS, X-Frame-Options         |
| Cache strategy        | Immutable assets, short HTML cache |
| Custom domain setup   | Documentation and automation       |
| Monitoring setup      | Cloudflare Analytics, uptime       |
| Rollback procedure    | Documented and tested              |

#### Deliverables

- [ ] Production deployment workflow (GitHub Actions)
- [ ] Preview deployment on pull requests
- [ ] Lighthouse CI with score thresholds
- [ ] Security headers (`_headers` file)
- [ ] Cache configuration (`_redirects` file if needed)
- [ ] Custom domain setup documentation
- [ ] Cloudflare Web Analytics integrated
- [ ] Deployment runbook (step-by-step operations guide)
- [ ] Rollback procedure documented and tested
- [ ] Environment-specific configuration (staging vs production)

#### Acceptance Criteria

- Push to `main` → live site updated within 3 minutes
- PR creates preview URL automatically
- Lighthouse CI blocks merge if scores below threshold
- Security headers present on all responses (verified via securityheaders.com)
- Custom domain with HTTPS working
- Rollback to previous deployment achievable in < 2 minutes
- Zero manual steps in deployment (fully automated)

#### Risks

| Risk                               | Mitigation                             |
| ---------------------------------- | -------------------------------------- |
| Cloudflare Pages build timeout     | Optimize build; cache dependencies     |
| Preview URL OAuth redirect issues  | Configure multiple OAuth redirect URIs |
| Security header conflicts with CMS | Separate CSP for /admin path           |

#### Dependencies

- Phase 4 completed (all pages built and tested)
- Custom domain purchased (for production testing)
- Cloudflare account configured

---

### Phase 6: Client Onboarding Process

**Duration:** 1 week  
**Effort:** 25-30 hours

#### Objectives

- Streamlined process to launch new client site
- Documentation for non-technical handoff
- Training materials for CMS usage
- Template for client communication

#### Scope

| Item                        | Description                               |
| --------------------------- | ----------------------------------------- |
| Onboarding checklist        | Step-by-step new client process           |
| Content collection template | Questionnaire/form for client info        |
| CMS user guide              | Visual guide for content editing          |
| Brand setup guide           | How to configure colors, logo, images     |
| Domain setup guide          | Client-facing DNS instructions            |
| Video walkthrough           | Screen recording of CMS usage             |
| Automation scripts          | CLI tools to scaffold new client site     |
| Client agreement template   | Scope, responsibilities, handoff criteria |

#### Deliverables

- [ ] Client onboarding checklist (step-by-step)
- [ ] Content collection questionnaire (Google Form or similar)
- [ ] CMS user guide (visual, non-technical)
- [ ] Brand asset requirements document
- [ ] Domain configuration guide (client-facing)
- [ ] Onboarding automation script (fork + configure)
- [ ] Client handoff email template
- [ ] Support/maintenance scope document
- [ ] FAQ document for common client questions
- [ ] Video tutorial: "How to edit your website" (5-10 min)

#### Acceptance Criteria

- New client can be onboarded in ≤ 2 hours (developer time)
- Client can independently edit content after 15-minute training
- Zero developer intervention needed for routine content updates
- Onboarding script automates repository creation and initial config
- All documentation reviewed for clarity by non-technical reader

#### Risks

| Risk                                 | Mitigation                                  |
| ------------------------------------ | ------------------------------------------- |
| Client unable to use GitHub OAuth    | Consider Netlify Identity as alternative    |
| Content collection delays project    | Provide sample content; finalize later      |
| Client scope creep during onboarding | Clear agreement template with defined scope |

#### Dependencies

- Phase 5 completed (deployment fully automated)
- At least one real client to pilot the process
- Content collection form/template created

---

### Phase 7: Multi-Client Scaling Strategy

**Duration:** 1-2 weeks  
**Effort:** 30-40 hours

#### Objectives

- Manage 50+ client sites efficiently
- Propagate template updates safely
- Monitor health across all sites
- Optimize operational overhead

#### Scope

| Item                  | Description                                       |
| --------------------- | ------------------------------------------------- |
| Multi-repo management | Tooling for bulk operations across client repos   |
| Template versioning   | Semantic versioning for template releases         |
| Update propagation    | Automated PR creation for template updates        |
| Health dashboard      | Overview of all client sites' status              |
| Scaling documentation | Operational procedures for large-scale management |
| Cost monitoring       | Track free tier usage across all sites            |
| Client lifecycle      | Onboard, maintain, offboard procedures            |

#### Deliverables

- [ ] Template versioning strategy (semantic versioning)
- [ ] Automated upstream sync script (creates PRs in client repos)
- [ ] Multi-repo management CLI tool or script
- [ ] Client site registry (spreadsheet or simple database)
- [ ] Health monitoring dashboard (Lighthouse scores, uptime)
- [ ] Scaling playbook (operational procedures)
- [ ] Cost tracking spreadsheet (free tier usage)
- [ ] Client offboarding procedure
- [ ] Template changelog (auto-generated from commits)
- [ ] Incident response plan

#### Acceptance Criteria

- Template update can be propagated to all client sites with single command
- Client sites can choose to accept or defer template updates
- No template update breaks a client site (backward compatibility)
- All client sites trackable in central registry
- Free tier limits not exceeded at 50 sites
- Operational overhead < 2 hours/month for 50 sites

#### Risks

| Risk                                                 | Mitigation                                                |
| ---------------------------------------------------- | --------------------------------------------------------- |
| Template update conflicts with client customizations | Clear separation of content vs template; merge strategies |
| Free tier limits approached                          | Monitor usage; identify optimization opportunities        |
| Single developer bottleneck                          | Document everything; enable async operations              |
| Client repos diverge too far from template           | Regular sync cadence; minimal customization surface       |

#### Dependencies

- Phase 6 completed (onboarding process proven)
- 5+ client sites deployed (real-world validation)
- Template stable (no frequent breaking changes)

---

## Appendix A: Decision Log

| Date | Decision                      | Rationale                                                     | Alternatives Considered                     |
| ---- | ----------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| —    | Astro over Angular            | Purpose-built for static content; zero JS; native CMS support | Angular SSG, Next.js, Hugo, 11ty            |
| —    | Decap CMS over TinaCMS        | 100% free; no external service; Git-native                    | TinaCMS, Sanity, Contentful                 |
| —    | Cloudflare Pages over Netlify | Superior free tier; better CDN; unlimited bandwidth           | Netlify, Vercel, GitHub Pages               |
| —    | YAML over JSON for content    | Human-readable; supports comments; better for non-devs in CMS | JSON, TOML, Markdown frontmatter only       |
| —    | Fork strategy over monorepo   | Client isolation; independent deploys; simpler CMS config     | Monorepo with Turborepo, branch-per-client  |
| —    | Tailwind over component CSS   | Utility-first enables theming via config; tiny purged output  | CSS Modules, Styled Components, vanilla CSS |

---

## Appendix B: Glossary

| Term    | Definition                                                   |
| ------- | ------------------------------------------------------------ |
| SSG     | Static Site Generator — builds HTML at compile time          |
| CDN     | Content Delivery Network — serves assets from edge locations |
| CMS     | Content Management System — interface for editing content    |
| CI/CD   | Continuous Integration/Continuous Deployment                 |
| LCP     | Largest Contentful Paint — Core Web Vital metric             |
| FCP     | First Contentful Paint — performance metric                  |
| CLS     | Cumulative Layout Shift — visual stability metric            |
| CSP     | Content Security Policy — security header                    |
| OAuth   | Open Authorization — authentication protocol                 |
| JSON-LD | JSON for Linked Data — structured data format for SEO        |
| PoP     | Point of Presence — CDN edge server location                 |

---

## Appendix C: Reference Links

| Resource                 | URL                                           |
| ------------------------ | --------------------------------------------- |
| Astro Documentation      | https://docs.astro.build                      |
| Tailwind CSS             | https://tailwindcss.com                       |
| Decap CMS                | https://decapcms.org                          |
| Cloudflare Pages         | https://pages.cloudflare.com                  |
| GitHub Actions           | https://docs.github.com/en/actions            |
| Lighthouse CI            | https://github.com/GoogleChrome/lighthouse-ci |
| Web.dev Performance      | https://web.dev/performance                   |
| Schema.org               | https://schema.org                            |
| WCAG 2.1                 | https://www.w3.org/WAI/WCAG21/quickref        |
| Cloudflare Web Analytics | https://www.cloudflare.com/web-analytics      |

---

## Appendix D: Effort Summary

| Phase                  | Duration       | Effort (Hours)    | Dependencies |
| ---------------------- | -------------- | ----------------- | ------------ |
| Phase 0: Discovery     | 1 week         | 15-20             | None         |
| Phase 1: Setup         | 3-4 days       | 20-25             | Phase 0      |
| Phase 2: Design System | 1-1.5 weeks    | 30-40             | Phase 1      |
| Phase 3: CMS           | 1 week         | 25-35             | Phase 2      |
| Phase 4: Pages & SEO   | 1.5-2 weeks    | 40-50             | Phase 3      |
| Phase 5: Deployment    | 3-5 days       | 20-25             | Phase 4      |
| Phase 6: Onboarding    | 1 week         | 25-30             | Phase 5      |
| Phase 7: Scaling       | 1-2 weeks      | 30-40             | Phase 6      |
| **TOTAL**              | **8-10 weeks** | **205-265 hours** | —            |

---

## Appendix E: Asset Specifications (AI-Generated Content)

All images and videos across client sites must follow these specifications for **uniformity and consistency**.

### Image Specifications

| Asset Type | Dimensions (px) | Aspect Ratio | Format | Max File Size | Notes |
|---|---|---|---|---|---|
| **Logo** | 200 x 60 | Flexible | SVG (preferred), PNG | 50KB | Transparent background |
| **Logo (Square/Icon)** | 512 x 512 | 1:1 | SVG, PNG | 100KB | For favicon, social |
| **Hero Banner** | 1920 x 1080 | 16:9 | WebP, JPG | 300KB | Full-width background |
| **Hero Banner (Mobile)** | 768 x 1024 | 3:4 | WebP, JPG | 150KB | Portrait for mobile |
| **Service Card Image** | 800 x 600 | 4:3 | WebP, PNG | 150KB | Service/feature icons or photos |
| **Service Icon** | 128 x 128 | 1:1 | SVG, PNG | 20KB | Flat/minimal style |
| **Gallery Image** | 1200 x 800 | 3:2 | WebP, JPG | 200KB | Landscape orientation |
| **Gallery Thumbnail** | 400 x 300 | 4:3 | WebP, JPG | 50KB | Auto-generated from full image |
| **Testimonial Avatar** | 200 x 200 | 1:1 | WebP, PNG | 30KB | Circular crop, face centered |
| **Team Member Photo** | 600 x 600 | 1:1 | WebP, JPG | 100KB | Consistent background/style |
| **About Section Image** | 1200 x 900 | 4:3 | WebP, JPG | 200KB | Company/office/team |
| **Blog/Tour Detail Image** | 1200 x 675 | 16:9 | WebP, JPG | 200KB | Detail page hero |
| **OG/Social Share Image** | 1200 x 630 | ~1.91:1 | JPG, PNG | 200KB | For link previews |
| **Favicon** | 32 x 32, 192 x 192 | 1:1 | ICO, PNG | 10KB | Multi-size |
| **Background Pattern/Texture** | 1920 x 1080 | 16:9 | WebP, PNG | 100KB | Subtle, tileable if needed |

### Video Specifications

| Asset Type | Resolution | Aspect Ratio | Format | Max File Size | Duration | Notes |
|---|---|---|---|---|---|---|
| **Hero Background Video** | 1920 x 1080 | 16:9 | MP4 (H.264) | 5MB | 10-20s | Loop, no audio, muted autoplay |
| **Hero Video (Mobile)** | 720 x 1280 | 9:16 | MP4 (H.264) | 3MB | 10-15s | Portrait version |
| **Tour/Service Promo** | 1280 x 720 | 16:9 | MP4 (H.264) | 10MB | 30-60s | Optional audio |

### AI Image Generation Prompts — Style Guide

| Parameter | Specification |
|---|---|
| **Style Consistency** | All images for a single client must use the same AI model + style seed |
| **Color Palette** | Match client's brand colors (primary/accent as dominant tones) |
| **Lighting** | Bright, natural, warm lighting (unless brand requires otherwise) |
| **Composition** | Subject centered or rule-of-thirds; clean backgrounds |
| **Text in Images** | AVOID — text should be HTML overlay, not baked into images |
| **Faces** | Use only for testimonials/team; ensure diversity and realism |
| **Backgrounds** | Consistent treatment per site (solid, gradient, or photographic) |
| **Negative Prompts** | No watermarks, no text, no logos, no borders, no artifacts |

### Asset Naming Convention

```
Format: {section}-{descriptor}-{size}.{ext}

Examples:
  hero-beach-sunset-1920x1080.webp
  hero-beach-sunset-768x1024.webp    (mobile variant)
  service-tour-packages-800x600.webp
  service-icon-adventure-128x128.svg
  gallery-mountain-trek-01-1200x800.webp
  testimonial-avatar-john-200x200.webp
  team-member-priya-600x600.webp
  og-share-image-1200x630.jpg
```

### Responsive Image Breakpoints (Auto-Generated at Build)

| Breakpoint | Width | Usage |
|---|---|---|
| Small (mobile) | 320px, 480px | Mobile devices |
| Medium (tablet) | 768px | Tablets |
| Large (desktop) | 1024px, 1280px | Desktop |
| XL (wide) | 1920px | Large displays |

The build pipeline (Astro Image + Sharp) auto-generates all responsive sizes from the **largest source image**. You only need to provide the full-size version.

---

_Document End_  
_Next Step: Begin Phase 1 — Project Setup_
