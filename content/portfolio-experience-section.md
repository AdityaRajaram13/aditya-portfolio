# Experience

## Backend Developer (Team Lead) — Syntags Professional Services
**2024 – Present**

Backend-focused engineer building a multi-location inventory and billing SaaS product, owning core services end-to-end and leading a small team into backend development.

### Core Backend Development
- Designed and implemented automated **GST (Goods and Services Tax) reporting** within a Node.js/Express backend, handling accurate tax computation and report generation for a multi-location billing system.
- Built a **vector/embedding-based search system for HSN (Harmonized System Nomenclature) code matching**, improving accuracy and speed of product-to-tax-code classification over traditional keyword lookup.
- Used **Redis** for caching across payment and high-traffic read paths to reduce response latency.

### Data Architecture & Catalog System
- **[CONFIRM/EDIT]** Led the migration of the core data layer from **MongoDB to PostgreSQL** (via Sequelize), moving to a relational model to support complex joins across products, variants, and location-based inventory, and to ensure transactional integrity for billing and invoicing data.
- Architected a **Product & Variant catalog model**: separated variant-level data (description, thumbnail image) from location-specific pricing, using dual `hasMany` associations to support price fallback logic without raw SQL.
- Built reusable, chainable **`ProductQueryBuilder`** and **`VariantQueryBuilder`** classes to standardize complex catalog queries across the codebase.
- Diagnosed and fixed a critical bug where an availability filter applied inside a SQL JOIN's `WHERE` clause was silently breaking default variant loading; resolved by refactoring to an `EXISTS` subquery with `LEFT JOIN`s.
- Audited and fixed **5 production bugs** in the catalog/inventory service: a silent pagination break (JS-side re-filtering overwriting the database's accurate total count), a GraphQL schema field-naming mismatch silently breaking category filters, inconsistent location-mode logic between list and count operations, redundant database round-trips, and an inventory availability resolution bug.
- Built **`InventoryProvisioningService`** to centralize and standardize `LocationInventory` row creation across the system.
- Made the deliberate API architecture decision to keep **GraphQL (Apollo Server) for read/query operations only**, with all mutations handled via REST.

### Infrastructure & DevOps
- Architected a **microservices system using RabbitMQ** for asynchronous, decoupled inter-service communication.
- Containerized services with **Docker**, writing and maintaining production Dockerfiles across the microservices fleet.
- Deployed initially on **Kubernetes using Helm charts**; after evaluating that the operational overhead exceeded the product's actual scaling needs, led the migration to **Docker Swarm**, simplifying deployment and ongoing maintenance for the company's own product infrastructure.

### Integrations & Payments
- Integrated the **WhatsApp Business API**, enabling customers to generate invoices, proforma invoices, and place orders directly through WhatsApp; built the supporting **email and WhatsApp notification services** behind it.
- Integrated **Razorpay's Partner API**, allowing client companies to onboard their own Razorpay accounts for independent payment collection within the platform.
- Built a **bank statement reconciliation pipeline** for accounting/ERP integration: parsing and importing Excel bank statements, fixing data bugs (operator precedence errors, swapped date fields, incomplete row handling), supporting manual debit/credit reconciliation against voucher types, and generating XML output for downstream accounting systems.

### Frontend Contributions
- Built and maintained **Next.js** applications using server-side rendering, reusable component architecture, and SEO-optimized page structure.
- Led a multi-version **Angular upgrade (v19 → v22)** across three major releases, adopting Signal Forms, zoneless change detection, and updated tooling while keeping the application stable throughout.
- Researched UI/UX patterns from financial platforms (Stripe, FreshBooks, HoneyBook) to inform invoicing and billing interface design.

### Leadership & Team Development
- Leading backend development for the company's **kiosk product line**, owning the full backend implementation.
- Designing and delivering a structured **backend learning curriculum** (JavaScript fundamentals, Node.js, Express) to transition manual QA testers into backend development roles.
- Explored **Claude AI "Skills"** to streamline AI-assisted development within the existing codebase, improving team workflow efficiency.

---

**Tech stack:** Node.js, Express, TypeScript, Sequelize, PostgreSQL, MongoDB, GraphQL (Apollo Server), Next.js, Angular, RabbitMQ, Docker, Docker Swarm, Kubernetes, Helm, Redis, Razorpay Partner API, WhatsApp Business API
