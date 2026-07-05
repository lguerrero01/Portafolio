# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio built with **Angular 21** (esbuild/`@angular/build:application` builder). It is one route (`''` → `ProfileComponent`) that stacks a fixed sequence of section components. Content is in Spanish.

The app deliberately keeps the classic **NgModule** architecture rather than standalone components: every component/pipe is marked `standalone: false` and declared in `AppModule` / `ProfileModule`. When adding a component, keep `standalone: false` and declare it in the owning module, or the build fails with NG6008. Node ≥22.12 is required (Angular 21 engine); Angular 22 needs Node ≥22.22, so this project caps at 21 until Node is bumped.

## Commands

- `npm start` / `ng serve` — dev server at `http://localhost:4200/` (defaults to the `development` config)
- `ng build` — production build (default config) to `dist/browser/`
- `npm run watch` — rebuild on change using the `development` config
- `npm test` / `ng test` — run all unit tests via Karma + Jasmine (watch mode, opens Chrome)
- `ng test --no-watch --browsers=ChromeHeadless` — single headless run (CI-style); the `@angular/build:karma` builder auto-discovers `*.spec.ts` (no `karma.conf.js`/`test.ts`)
- Run a single spec: temporarily set `fdescribe`/`fit` in the `.spec.ts` file (there is no test path filter configured), then `ng test`
- NgModule specs must set up their own `TestBed` (declare the `SplitPipe`, import `NgxPaginationModule`/`ReactiveFormsModule`, or add `CUSTOM_ELEMENTS_SCHEMA` for templates that render sibling `app-*` components)
- `ng deploy` — deploy to GitHub Pages via `angular-cli-ghpages`

## Architecture

- **Data lives in one service, not a backend.** `src/app/shared/services/profile.service.ts` is a `providedIn: 'root'` singleton holding ALL portfolio content (about text, projects, skills, education, experience, résumé URLs) as hardcoded public arrays, exposed through getter properties (`skills`, `getProjects`, `education`, `experience`). To change portfolio content, edit this service — there are no API calls or JSON assets. Types for these arrays are in `src/app/shared/models/experiance.model.ts` (`Proyect`, `Skill`, `EducationData`, `Experiance`).

- **Two-module structure.** `AppModule` (root) only declares `AppComponent` and wires routing. Every visible section lives in `ProfileModule` (`src/app/components/profile/`), which declares all section components (`intro`, `about`, `experience`, `projects`, `skills`, `education`, `reference`, `contact`, plus `header`/`footer`). `profile.component.html` is the assembly point: it renders the sections in a fixed top-to-bottom order. Adding a section means creating the component, declaring it in `profile.module.ts`, and inserting its selector into `profile.component.html`.

- **Styling is global CSS, not Angular.** Vendored stylesheets live in `src/assets/css/` (`bootstrap.min.css`, `main.css`, `aos.css`). Component `.scss` files exist but most layout comes from Bootstrap classes and `main.css`. The AOS library drives scroll animations. Note `angular.json` sets a strict per-component style budget (2kb warning / 4kb error) — keep component SCSS small.

- **Contact form uses client-side SMTP.** `contact.component.ts` imports `assets/smtp.js` (SmtpJS) and calls `Email.send(...)` directly from the browser. Credentials are currently hardcoded in that method — treat this as insecure/placeholder, not a pattern to replicate.

- **`SplitPipe`** (`shared/pipes/split.pipe.ts`) splits a string on the literal `" ."` — used to render multi-line experience/education blobs from the service as separate lines.

## Conventions

- Angular strict mode is on (`tsconfig` + `angular.json` schematics). New components default to SCSS styling and the `app` selector prefix.
- Section components are presentational: they inject `ProfileService` and read a getter; keep new content in the service rather than inlining it in templates.
