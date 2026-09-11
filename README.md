# Squamish Cricket Club static website

Production-oriented, mobile-first HTML/CSS/JavaScript site. No build step or backend is required.

## Local preview

Run `python3 -m http.server 8080` in this folder, then open `http://localhost:8080`.

## Deployment

### GitHub Pages
1. Create a repository and upload the contents of this folder to the default branch.
2. In **Settings > Pages**, choose **Deploy from a branch**, the default branch, and `/ (root)`.
3. Add the custom domain, configure its DNS, and enforce HTTPS.

### Azure Static Web Apps
1. Push this folder to GitHub.
2. In Azure, create a Static Web App and connect the repository.
3. Set app location to `/`, leave API and output locations blank, and deploy.
4. Add the custom domain and verify HTTPS. `staticwebapp.config.json` supplies the 404 fallback.

### Netlify
1. Drag this folder into Netlify Drop, or connect the Git repository.
2. Use no build command and set publish directory to `.`.
3. Add the domain and enable HTTPS. Security headers are included in `netlify.toml`.

## Pre-launch QA
- Complete `PLACEHOLDERS.md`; search all files for `[`, `REPLACE`, and `sample`.
- Add approved documents to `/documents/` or remove dead links until files exist.
- Validate HTML, test keyboard-only navigation, zoom to 200–400%, and test with a screen reader.
- Run Lighthouse mobile tests for Accessibility, SEO, Best Practices, and Performance.
- Test every form, email, external link and Jotform flow.
- Review privacy, terms, safeguarding, waivers and governance content with the Board and qualified advisers.
- Update sitemap/canonical URLs if the production domain or filenames change.

## Google for Nonprofits readiness
The site visibly presents the legal name, mission, community programs, contact details, governance, policies, reports and a physical-address field. Website completeness does not itself establish eligibility. The organization must hold an eligible status in Canada, remain in good standing, and complete Google’s independent verification process.
