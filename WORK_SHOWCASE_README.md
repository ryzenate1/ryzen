# Work Showcase Section - Temporary State Documentation

## Current Status
The work showcase section is currently in a **temporary disabled state** showing a "Coming Soon" message instead of the project carousel.

## File Location
- **File:** `src/components/sections/work.astro`
- **Section ID:** `work`

## Current State Details

### What's Currently Visible
- Section header with "Work" caption
- "Work Showcase" heading
- Glowy "Coming Soon" message in purple theme
- Compact section height (py-8 instead of default)

### What's Currently Disabled
- ProjectCarousel component (commented out)
- Project data fetching and display
- Interactive project navigation

## How to Restore Full Functionality

### Step 1: Restore Project Carousel
**In `src/components/sections/work.astro`:**

**Remove this block:**
```astro
<!-- Temporary "Coming Soon" Message with Glow -->
<div class="flex flex-col items-center justify-center text-center py-4">
  <p class="text-neutrals-100 text-2xl md:text-3xl font-bold drop-shadow-[0_0_15px_rgba(105,25,255,0.7)] text-shadow-[0_0_10px_rgba(105,25,255,0.5)]">
    Coming Soon
  </p>
</div>
```

**Uncomment this block:**
```astro
<!-- <ProjectCarousel
  client:idle
  projects={projects}
/> -->
```

**Should become:**
```astro
<ProjectCarousel
  client:idle
  projects={projects}
/>
```

### Step 2: Restore Section Height
**Change the Section class from:**
```astro
class="lg:border-neutrals-600 lg:border-t-[0.5px] lg:before:hidden lg:after:hidden py-8 min-h-auto"
```

**To:**
```astro
class="lg:border-neutrals-600 lg:border-t-[0.5px] lg:before:hidden lg:after:hidden"
```

*This removes the compact height constraints (py-8 and min-h-auto) to allow the section to expand properly for the carousel.*

### Step 3: Optional - Update Heading (if desired)
You may want to change the heading back to the original if preferred:
- Current: "Work Showcase"
- Original: "Dig into our universe"

## Dependencies Required
Ensure these components are working properly:
- `@/components/project-carousel` - Main carousel component
- `@/lib/sanity/get-projects` - Data fetching from Sanity CMS
- Project data in Sanity CMS

## Visual Expectations After Restoration
- Full-height section with proper spacing
- Interactive project carousel with navigation
- Project cards with hover effects
- Responsive design across all devices

## Current Section Structure (for reference)
```
Work Section
├── Section Container (with glow effects)
├── Container
│   └── Header (Caption + Heading)
├── [DISABLED] ProjectCarousel
└── [TEMPORARY] Coming Soon Message
```

## Notes
- The section maintains consistent background styling with other sections
- All imports are still present and ready for restoration
- Project data fetching (`getProjects()`) is still active but unused
- The compact styling was added specifically for the empty state

---
*Created: August 16, 2025*  
*Purpose: Documentation for future AI assistance in restoring work showcase functionality*
