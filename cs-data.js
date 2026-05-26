  const projects = {

    'thaipass': {
      accent:   '#C8783A',
      category: 'UX/UI',
      num:      '01',
      title:    'ThaiPass — Travel Companion',
      meta: [
        { label: 'Role',     value: 'UX / UI Designer' },
        { label: 'Timeline', value: '6 Months' },
        { label: 'Type',     value: 'Production Project' },
        { label: 'Platform', value: 'Mobile App' },
      ],
      next: { id: 'software', title: 'Software Project' },
    },

    'bcc': {
      accent:   '#4C91DB',
      category: 'UX/UI',
      num:      '02',
      title:    'BCC — Calculation Program',
      meta: [
        { label: 'Role',     value: 'UX / UI Designer & PO' },
        { label: 'Timeline', value: '3 Months' },
        { label: 'Type',     value: 'Web Application' },
        { label: 'Platform', value: 'Desktop & Mobile' },
      ],
      next: { id: 'netzero', title: 'Net Zero — Government Carbon Platform' },
    },

    'netzero': {
      accent:   '#56AE7C',
      category: 'UX/UI',
      num:      '03',
      title:    'Net Zero — Government Carbon Platform',
      meta: [
        { label: 'Role',     value: 'UX / UI Designer & PO' },
        { label: 'Timeline', value: '2 Weeks (Design Sprint)' },
        { label: 'Type',     value: 'Proposal Project' },
        { label: 'Platform', value: 'Web Application' },
      ],
      next: { id: 'myanmarpass', title: 'MyanmarPass — Migrant Worker Platform' },
    },

    'myanmarpass': {
      accent:   '#C4556A',
      category: 'UX/UI',
      num:      '04',
      title:    'MyanmarPass — Migrant Worker Platform',
      meta: [
        { label: 'Role',     value: 'UX / UI Designer' },
        { label: 'Timeline', value: '10 Days (Design Sprint)' },
        { label: 'Type',     value: 'Proposal Project' },
        { label: 'Platform', value: 'Mobile App' },
      ],
      next: { id: 'jaga', title: 'JAGA App — CometChat Feature' },
    },

    'jaga': {
      accent:   '#58B05A',
      category: 'UX/UI',
      num:      '05',
      title:    'JAGA App — CometChat Feature',
      meta: [
        { label: 'Role',     value: 'UX / UI Designer' },
        { label: 'Timeline', value: '2–3 Weeks (Design Sprint)' },
        { label: 'Type',     value: 'Production Project' },
        { label: 'Platform', value: 'Mobile App' },
      ],
      next: { id: 'onebangkok', title: 'One Bangkok App — Showcase Video' },
    },

    'onebangkok': {
      accent:   '#D4A050',
      category: 'UX/UI',
      num:      '06',
      title:    'One Bangkok App — Showcase Video',
      meta: [
        { label: 'Role',     value: 'Motion Designer' },
        { label: 'Timeline', value: '1 Week' },
        { label: 'Type',     value: 'Experimental Project' },
        { label: 'Platform', value: 'Web / Video' },
      ],
      next: { id: 'nipa', title: 'NIPA Payment System' },
    },

    'nipa': {
      accent:   '#5B82D8',
      category: 'UX/UI',
      num:      '07',
      title:    'NIPA Payment System',
      meta: [
        { label: 'Role',     value: 'UX / UI Designer' },
        { label: 'Timeline', value: '2 Months' },
        { label: 'Type',     value: 'Production Project' },
        { label: 'Platform', value: 'Web Application' },
      ],
      next: { id: 'nipalb', title: 'NIPA Load Balancing Service' },
    },

    'nipalb': {
      accent:   '#30AECE',
      category: 'UX/UI',
      num:      '08',
      title:    'NIPA Load Balancing Service',
      meta: [
        { label: 'Role',     value: 'UX / UI Designer' },
        { label: 'Timeline', value: '5 Days' },
        { label: 'Type',     value: 'Proposal Project' },
        { label: 'Platform', value: 'Web Application' },
      ],
      next: { id: 'software', title: 'Software Project' },
    },

    'software': {
      accent:   '#3898DB',
      category: 'Software',
      num:      '01',
      title:    'Simple Weather App',
      meta: [
        { label: 'Skill',    value: 'Flutter' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'API',      value: 'OpenWeatherMap' },
        { label: 'Platform', value: 'Mobile' },
      ],
      next: { id: 'onboarding', title: 'Onboarding Screen' },
    },

    'onboarding': {
      accent:   '#967BDE',
      category: 'Software',
      num:      '02',
      title:    'Onboarding Screen',
      meta: [
        { label: 'Skill',    value: 'Flutter' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'Library',  value: 'GetX, SmoothPageIndicator' },
        { label: 'Platform', value: 'Mobile' },
      ],
      next: { id: 'loginscreen', title: 'Login / SignUp Screen' },
    },

    'loginscreen': {
      accent:   '#4EC088',
      category: 'Software',
      num:      '03',
      title:    'Login / SignUp Screen',
      meta: [
        { label: 'Skill',    value: 'Flutter' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'Library',  value: 'GetX' },
        { label: 'Platform', value: 'Mobile' },
      ],
      next: { id: 'apollo', title: 'MoonShot — Apollo Info App' },
    },

    'apollo': {
      accent:   '#7078C8',
      category: 'Software',
      num:      '04',
      title:    'MoonShot — Apollo Info App',
      meta: [
        { label: 'Skill',    value: 'SwiftUI' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'Data',     value: 'JSON Decoding' },
        { label: 'Platform', value: 'iOS' },
      ],
      next: { id: 'px500', title: '500px API App' },
    },

    'px500': {
      accent:   '#4A82C0',
      category: 'Software',
      num:      '05',
      title:    '500px API App',
      meta: [
        { label: 'Skill',    value: 'SwiftUI' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'API',      value: '500px REST API' },
        { label: 'Platform', value: 'iOS' },
      ],
      next: { id: 'iexpense', title: 'iExpense — Expense Tracker' },
    },

    'iexpense': {
      accent:   '#C46060',
      category: 'Software',
      num:      '06',
      title:    'iExpense — Expense Tracker',
      meta: [
        { label: 'Skill',    value: 'SwiftUI' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'Storage',  value: 'UserDefaults' },
        { label: 'Platform', value: 'iOS' },
      ],
      next: { id: 'multiquiz', title: 'Multiplication Quiz' },
    },

    'multiquiz': {
      accent:   '#C48040',
      category: 'Software',
      num:      '07',
      title:    'Multiplication Quiz',
      meta: [
        { label: 'Skill',    value: 'SwiftUI' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'Features', value: 'Form, State, Animation' },
        { label: 'Platform', value: 'iOS' },
      ],
      next: { id: 'bettersleep', title: 'BetterSleep App' },
    },

    'bettersleep': {
      accent:   '#4A76BE',
      category: 'Software',
      num:      '08',
      title:    'BetterSleep App',
      meta: [
        { label: 'Skill',    value: 'SwiftUI' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'ML',       value: 'CoreML' },
        { label: 'Platform', value: 'iOS' },
      ],
      next: { id: 'guessflag', title: 'Guess the Flag' },
    },

    'guessflag': {
      accent:   '#3A9860',
      category: 'Software',
      num:      '09',
      title:    'Guess the Flag',
      meta: [
        { label: 'Skill',    value: 'SwiftUI' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'Features', value: 'Animation, ZStack, State' },
        { label: 'Platform', value: 'iOS' },
      ],
      next: { id: 'plantcollect', title: 'Plant Collection App' },
    },

    'plantcollect': {
      accent:   '#58A058',
      category: 'Software',
      num:      '10',
      title:    'Plant Collection App',
      meta: [
        { label: 'Skill',    value: 'Flutter' },
        { label: 'Type',     value: 'Experimental' },
        { label: 'Library',  value: 'Provider' },
        { label: 'Platform', value: 'Mobile' },
      ],
      next: { id: 'submarine', title: 'Piston Ballast Tank Submarine' },
    },

    'submarine': {
      accent:   '#4A84BE',
      category: 'Industrial Design',
      num:      '01',
      title:    'Piston Ballast Tank Submarine',
      meta: [
        { label: 'Role',     value: 'Industrial Designer' },
        { label: 'Timeline', value: 'University Project' },
        { label: 'Tools',    value: 'Autodesk Fusion 360' },
        { label: 'Type',     value: 'University Project' },
      ],
      next: { id: 'hera', title: 'RISA — Robotic Interactive Smart Assistant' },
    },

    'hera': {
      accent:   '#1EA8CE',
      category: 'Industrial Design',
      num:      '02',
      title:    'RISA — Robotic Interactive Smart Assistant',
      meta: [
        { label: 'Role',     value: 'Industrial Designer' },
        { label: 'Timeline', value: 'Dec 2024 – Mar 2025' },
        { label: 'Tools',    value: 'Autodesk Fusion 360' },
        { label: 'Type',     value: 'Collaborative University Project' },
      ],
      next: { id: 'thaipass', title: 'ThaiPass — Travel Companion' },
    },

  };

  function getBody(id) {
    if (id === 'thaipass') return `
      <img class="cs-img" src="./projects/thaipass/cover.png" alt="ThaiPass cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Everything ready before you land.</h2>
        <p class="section-text">ThaiPass is a travel companion app designed for international visitors to Thailand. It consolidates pre-arrival documentation, connectivity, transportation, and insurance into a single trusted platform &mdash; so travellers arrive prepared, not overwhelmed.</p>
        <div class="cs-tags">
          <span class="cs-tag">Voucher Packages</span>
          <span class="cs-tag">FastPass</span>
          <span class="cs-tag">Transport</span>
          <span class="cs-tag">eSIM</span>
          <span class="cs-tag">Insurance</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Problem</p>
        <h2 class="section-heading">A fragmented, stressful journey.</h2>
        <p class="section-text">Travelling to Thailand often means juggling multiple platforms for documentation, internet access, transport, and insurance &mdash; each with its own friction.</p>
        <ul class="cs-list">
          <li>Confusing pre-arrival requirements (TDAC process)</li>
          <li>Long queues at airport immigration</li>
          <li>Difficulty getting internet access upon arrival</li>
          <li>Uncertainty around transportation options</li>
          <li>No single trusted source for travel services</li>
        </ul>
        <div class="cs-quote">
          <p>How might we design a single, trusted platform that simplifies the entire travel journey &mdash; from pre-arrival to beyond?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Research</p>
        <h2 class="section-heading">Key insights.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item">
            <span class="cs-col2-label">Prepare before landing</span>
            <span class="cs-col2-text">Travellers want everything sorted before they step off the plane. Uncertainty post-landing is a major source of stress.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Time is the priority</span>
            <span class="cs-col2-text">Saving time at the airport and during setup was the highest-valued benefit across all traveller types.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Trust is non-negotiable</span>
            <span class="cs-col2-text">Users strongly prefer verified providers and official processes. Ambiguity or unclear fees lead to drop-off.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Simplicity for first-timers</span>
            <span class="cs-col2-text">First-time visitors are the most vulnerable. A clear, simple UI was critical &mdash; especially for non-English speakers.</span>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Design Process</p>
        <h2 class="section-heading">From strategy to screens.</h2>
        <p class="section-text">Defined ThaiPass as a travel companion &mdash; not just a booking tool. Structured the app around 5 core services, simplified into 3 user journey phases: Purchase, Arrival, and Support.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Home &amp; Account</p>
        <h2 class="section-heading">One dashboard for everything.</h2>
        <p class="section-text">The home screen gives travellers an instant overview of all active services, upcoming arrivals, and quick access to support &mdash; without noise.</p>
        <img class="cs-img" src="./projects/thaipass/home.png" alt="Home screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">Voucher Packages</p>
        <h2 class="section-heading">Bundled for convenience.</h2>
        <p class="section-text">Pre-packaged service bundles reduce decision fatigue and offer cost savings &mdash; making it easy to get everything in one purchase.</p>
        <img class="cs-img" src="./projects/thaipass/voucher-packages.png" alt="Voucher Packages screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">FastPass</p>
        <h2 class="section-heading">Skip the queue.</h2>
        <p class="section-text">FastPass gives travellers access to the fast-track immigration lane &mdash; a premium arrival experience that dramatically reduces waiting time at the airport.</p>
        <img class="cs-img" src="./projects/thaipass/fastpass.png" alt="FastPass screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">Transport</p>
        <h2 class="section-heading">Your ride, ready on arrival.</h2>
        <p class="section-text">Pre-book airport transfers before landing. No confusion, no negotiation &mdash; a reliable, verified driver waiting at the gate.</p>
        <img class="cs-img" src="./projects/thaipass/transport.png" alt="Transport screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">eSIM</p>
        <h2 class="section-heading">Online the moment you land.</h2>
        <p class="section-text">Instant connectivity via eSIM &mdash; no hunting for SIM card stalls at the airport. Activated in seconds, ready before you leave the gate.</p>
        <img class="cs-img" src="./projects/thaipass/esim.png" alt="eSIM screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">Insurance &amp; TDAC</p>
        <h2 class="section-heading">Protected and prepared.</h2>
        <p class="section-text">Travel insurance gives peace of mind. TDAC support links directly to the official Thailand Digital Arrival Card process &mdash; building trust and preventing scams.</p>
        <img class="cs-img" src="./projects/thaipass/insurance.png" alt="Insurance screens" />
        <img class="cs-img" src="./projects/thaipass/tdac.png" alt="TDAC screens" style="margin-top:16px;" />
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">A smoother start to every trip.</h2>
        <p class="section-text">ThaiPass simplified the travel preparation process for first-time and returning visitors alike &mdash; reducing stress, cutting airport friction, and building confidence through verified, trusted services.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Reflection</p>
        <h2 class="section-heading">What I learned.</h2>
        <p class="section-text">Strong product-market fit and a clear value proposition made this one of the most impactful projects I have worked on. The scalable feature architecture means it can grow with new services and traveller types.</p>
        <div class="cs-quote">
          <p>Great product design is not just about features &mdash; it is about reducing stress at every step of the user journey.</p>
        </div>
      </div>
    `;

    if (id === 'bcc') return `
      <img class="cs-img" src="./projects/bcc/cover.png" alt="BCC cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Making complex calculations simple.</h2>
        <p class="section-text">BCC is a web-based electrical calculation tool used by engineering professionals. The goal was to redesign a dense, formula-heavy system into a guided, step-by-step experience &mdash; without sacrificing technical accuracy.</p>
        <div class="cs-tags">
          <span class="cs-tag">Voltage Drop</span>
          <span class="cs-tag">Conductor Size</span>
          <span class="cs-tag">Circuit Distance</span>
          <span class="cs-tag">Report Export</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Problem</p>
        <h2 class="section-heading">A system built for accuracy, not people.</h2>
        <p class="section-text">The existing tool exposed raw engineering logic to users &mdash; overwhelming inputs, conditional formulas, and unclear results with no guidance through the process.</p>
        <ul class="cs-list">
          <li>Overwhelming number of technical inputs shown at once</li>
          <li>Complex formulas not understandable without engineering background</li>
          <li>High risk of input errors with no validation</li>
          <li>No clear guidance through calculation steps</li>
          <li>Difficult to interpret and share final results</li>
          <li>Poor usability across desktop and mobile</li>
        </ul>
        <div class="cs-quote">
          <p>How might we simplify a highly technical calculation system into an intuitive, step-by-step experience without compromising accuracy?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Research</p>
        <h2 class="section-heading">Deep into the logic.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item">
            <span class="cs-col2-label">Progressive disclosure</span>
            <span class="cs-col2-text">Users don&rsquo;t need to see everything at once. Showing only relevant fields step-by-step dramatically reduces overwhelm and error rate.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Accuracy is non-negotiable</span>
            <span class="cs-col2-text">No UX simplification could break the underlying logic. Every design decision had to be validated against the engineering formulas.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Conditional inputs</span>
            <span class="cs-col2-text">Many fields depend on previous selections. The interface needed to reflect if/else logic visually without exposing it to the user.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Professional output</span>
            <span class="cs-col2-text">Results must be clear, exportable, and formatted for professional use &mdash; engineers share these reports with clients and contractors.</span>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Design Process</p>
        <h2 class="section-heading">From Excel sheets to a guided flow.</h2>
        <p class="section-text">Started by deeply understanding the electrical logic &mdash; reviewing Excel sheets, formulas, and flowcharts with engineers. Then structured the experience into 4 clear phases: Insight Hub &rarr; Main Calculator &rarr; User Info Form &rarr; Calculation Report.</p>
        <img class="cs-img" src="./projects/bcc/flow.png" alt="User flow diagram" />
      </div>

      <div class="cs-section">
        <p class="section-label">Main Calculator</p>
        <h2 class="section-heading">Three tools, one guided system.</h2>
        <p class="section-text">The calculator supports Voltage Drop, Minimum Conductor Size, and Maximum Circuit Distance &mdash; each with step-by-step input and conditional logic that adapts to the user&rsquo;s selections.</p>
        <img class="cs-img" src="./projects/bcc/calculator.png" alt="Main calculator screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">Smart Input System</p>
        <h2 class="section-heading">Only what you need, when you need it.</h2>
        <p class="section-text">Dynamic fields reveal based on previous inputs. Visual indicators for cable types and built-in validation prevent errors before they happen.</p>
        <img class="cs-img" src="./projects/bcc/smart-input.png" alt="Smart input system" />
      </div>

      <div class="cs-section">
        <p class="section-label">Report & Export</p>
        <h2 class="section-heading">From calculation to professional document.</h2>
        <p class="section-text">An auto-generated A4 report captures all results &mdash; Voltage Drop, Conductor Size, and Circuit Distance &mdash; formatted for professional sharing and download.</p>
        <img class="cs-img" src="./projects/bcc/report.png" alt="Calculation report" />
      </div>

      <div class="cs-section">
        <p class="section-label">Responsive Design</p>
        <h2 class="section-heading">Optimized for every screen.</h2>
        <p class="section-text">The full experience is designed for both desktop and mobile &mdash; with responsive layouts, spacing rules, and component behavior defined for every breakpoint.</p>
        <img class="cs-img" src="./projects/bcc/responsive.png" alt="Responsive design" />
      </div>

      <div class="cs-section">
        <p class="section-label">Prototype</p>
        <h2 class="section-heading">Try it yourself.</h2>
        <p class="section-text">Interactive Figma prototype — click through the full calculation flow.</p>
        <div class="cs-figma">
          <iframe
            src="https://embed.figma.com/proto/seszSxo56ABilzjFLSNGUX/%F0%9F%94%8C?node-id=34-53135&p=f&t=PJd7BEPS80F27Uw5-0&scaling=scale-down-width&content-scaling=fixed&page-id=34%3A51217&starting-point-node-id=34%3A53085&embed-host=share&footer=false&theme=system"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">Complex made clear.</h2>
        <p class="section-text">The redesign simplified a highly technical workflow, reduced input errors, improved usability across devices, and enabled accurate, professional report generation for engineering teams.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Reflection</p>
        <h2 class="section-heading">What I learned.</h2>
        <p class="section-text">This project required deep collaboration with engineers and strong alignment with developers. Clear handoff documentation &mdash; covering flows, components, logic, and breakpoints &mdash; was as important as the design itself.</p>
        <div class="cs-quote">
          <p>Good UX is not about simplifying the system &mdash; it is about making complex systems understandable without losing their power.</p>
        </div>
      </div>
    `;

    if (id === 'netzero') return `
      <img class="cs-img" src="./projects/netzero/Frame_(1).png" alt="Net Zero cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">A platform for Thailand's carbon future.</h2>
        <p class="section-text">Net Zero is a centralized government platform designed to help Thai factories measure emissions, comply with carbon regulations, and participate in carbon credit markets &mdash; built as a 2-week design sprint for a national proposal.</p>
        <div class="cs-tags">
          <span class="cs-tag">MRV System</span>
          <span class="cs-tag">Compliance</span>
          <span class="cs-tag">Carbon Credits</span>
          <span class="cs-tag">Government Dashboard</span>
          <span class="cs-tag">Multi-stakeholder</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Problem</p>
        <h2 class="section-heading">Factories at risk of being left behind.</h2>
        <p class="section-text">Thailand is moving toward stricter carbon regulations and international carbon trading frameworks by 2030. Exporting factories will soon be required to measure and report emissions to remain competitive globally &mdash; but no standardized system exists to help them do it.</p>
        <ul class="cs-list">
          <li>No standardized MRV (Measurement, Reporting, Verification) system</li>
          <li>Difficult and manual certification processes</li>
          <li>Limited access to verified carbon credit markets</li>
          <li>Lack of clarity on tax incentives and compliance steps</li>
          <li>High risk of export penalties or bans due to non-compliance</li>
        </ul>
        <div class="cs-quote">
          <p>How might we design a centralized platform that enables factories to easily track emissions, achieve compliance, and unlock financial value through carbon markets?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Research</p>
        <h2 class="section-heading">Learning from global systems.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item">
            <span class="cs-col2-label">Compliance is regulation-driven</span>
            <span class="cs-col2-text">Carbon compliance follows mandatory frameworks &mdash; meaning guaranteed demand once legislation passes. Design had to support both voluntary early adopters and future mandated users.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Global benchmarks</span>
            <span class="cs-col2-text">China enforces large-scale mandatory emissions tracking. South Korea pairs compliance with market integration. The EU runs mature cross-border carbon trading. Thailand could position itself as a trusted export partner.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Multi-stakeholder complexity</span>
            <span class="cs-col2-text">The platform serves factories, government agencies, carbon credit buyers, and consultants simultaneously &mdash; each with different data needs, permissions, and workflows.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Accuracy + usability must coexist</span>
            <span class="cs-col2-text">Regulatory platforms often sacrifice usability for accuracy. The design challenge was building something factory workers could actually use &mdash; without compromising data integrity.</span>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Design Approach</p>
        <h2 class="section-heading">System thinking, phased delivery.</h2>
        <p class="section-text">Rather than designing a single dashboard, Net Zero was architected as a multi-stakeholder platform with four core pillars: Registration &amp; Onboarding, Emissions Tracking (MRV), Compliance Certification, and Carbon Marketplace. To manage complexity, the platform was scoped into 4 deployment phases.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Phase 1</p>
        <h2 class="section-heading">Registration &amp; basic MRV intake.</h2>
        <p class="section-text">The foundation phase focuses on onboarding Thai factories and capturing initial emissions data through a guided MRV intake flow. Designed to be accessible to factory operators with minimal technical background.</p>
        <img class="cs-img" src="./projects/netzero/8.png" alt="Phase 1 screens" />
        <img class="cs-img" src="./projects/netzero/9.png" alt="Phase 1 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/10.png" alt="Phase 1 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/11.png" alt="Phase 1 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/12.png" alt="Phase 1 screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Phase 2</p>
        <h2 class="section-heading">Advanced analytics &amp; compliance support.</h2>
        <p class="section-text">Phase 2 introduces emissions analytics dashboards, a consultant network for expert guidance, and integration with tax incentive and compliance workflows &mdash; helping factories move from data collection to active compliance.</p>
        <img class="cs-img" src="./projects/netzero/Slide-0.png" alt="Phase 2 screens" />
        <img class="cs-img" src="./projects/netzero/Slide-3.png" alt="Phase 2 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-4.png" alt="Phase 2 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-1.png" alt="Phase 2 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-2.png" alt="Phase 2 screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Phase 3</p>
        <h2 class="section-heading">Certification &amp; pilot marketplace.</h2>
        <p class="section-text">Compliant factories receive official carbon certificates. A pilot marketplace allows them to list and trade verified carbon credits &mdash; unlocking financial value from their compliance investments.</p>
        <img class="cs-img" src="./projects/netzero/Slide-1 1.png" alt="Phase 3 screens" />
        <img class="cs-img" src="./projects/netzero/Slide-2 1.png" alt="Phase 3 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-3 1.png" alt="Phase 3 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-4 1.png" alt="Phase 3 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-5.png" alt="Phase 3 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-0 1.png" alt="Phase 3 screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Phase 4</p>
        <h2 class="section-heading">National dashboard &amp; global marketplace.</h2>
        <p class="section-text">The final phase delivers a Ministry-level dashboard for national emissions oversight and a full-scale carbon marketplace enabling global trading &mdash; positioning Thailand as a trusted partner in international carbon frameworks.</p>
        <img class="cs-img" src="./projects/netzero/Slide-5 1.png" alt="Phase 4 screens" />
        <img class="cs-img" src="./projects/netzero/Slide-0 2.png" alt="Phase 4 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-1 2.png" alt="Phase 4 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-2 2.png" alt="Phase 4 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-3 2.png" alt="Phase 4 screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/netzero/Slide-4 2.png" alt="Phase 4 screens" style="margin-top:16px;" />
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">Thailand's path to trusted carbon compliance.</h2>
        <p class="section-text">Net Zero provides a scalable framework for national carbon management &mdash; reducing factory export risk, increasing compliance rates, growing Thailand's carbon credit market, and improving environmental transparency at a national level.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Reflection</p>
        <h2 class="section-heading">What I learned.</h2>
        <p class="section-text">Designing for government systems requires balancing regulation, scalability, and usability &mdash; not just interface design. The phased approach was key: it made a complex national system feel achievable by breaking it into concrete, deliverable steps.</p>
        <div class="cs-quote">
          <p>The best government platforms aren&rsquo;t built for governments &mdash; they&rsquo;re built for the people who have no choice but to use them.</p>
        </div>
      </div>
    `;

    if (id === 'nipalb') return `
      <img class="cs-img" src="./projects/nipalb/image 1.png" alt="NIPA Load Balancing cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Making infrastructure simple enough for anyone.</h2>
        <p class="section-text">NIPA's Load Balancing Service allows users to distribute traffic and scale applications without deep technical expertise. This project designed a user-friendly interface for configuring and managing load balancers &mdash; turning complex infrastructure into clear, guided decisions.</p>
        <div class="cs-tags">
          <span class="cs-tag">Cloud Infrastructure</span>
          <span class="cs-tag">Load Balancing</span>
          <span class="cs-tag">Pricing Calculator</span>
          <span class="cs-tag">Responsive</span>
          <span class="cs-tag">Proposal</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Problem</p>
        <h2 class="section-heading">Too technical for the people who need it most.</h2>
        <p class="section-text">Cloud infrastructure tools are often designed by engineers, for engineers. But the users who need load balancing most &mdash; e-commerce owners, university admins, event managers &mdash; aren't infrastructure experts. Complexity is the barrier to adoption.</p>
        <ul class="cs-list">
          <li>Difficulty understanding technical configurations</li>
          <li>Managing high traffic during peak events causes crashes</li>
          <li>Lack of clarity in pricing and setup</li>
          <li>Overwhelming interfaces for non-technical users</li>
          <li>Risk of costly errors from misconfiguration</li>
        </ul>
        <div class="cs-quote">
          <p>How might we simplify load balancer configuration so users can easily scale their applications without needing deep technical expertise?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Research</p>
        <h2 class="section-heading">Three users, one shared pain.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item">
            <span class="cs-col2-label">Sarah — E-commerce Entrepreneur</span>
            <span class="cs-col2-text">Needs stable performance during sales spikes. Wants to grow her business without technical overhead. Pain: website crashes during high-traffic promotions.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Prof. Martinez — University Admin</span>
            <span class="cs-col2-text">Manages large-scale student systems. Needs reliability during peak registration periods. Pain: system overload during deadlines.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Emily — Ticketing Manager</span>
            <span class="cs-col2-text">Handles high-demand event bookings. Needs seamless performance at launch. Pain: traffic surges causing lost sales and user frustration.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Key insight</span>
            <span class="cs-col2-text">Users care about performance, not infrastructure. Peak traffic is the biggest stress point. Pricing transparency and simplicity are what drive adoption.</span>
          </div>
        </div>
        <img class="cs-img" src="./projects/nipalb/image.png" alt="Research and wireframes" />
        <img class="cs-img" src="./projects/nipalb/Screenshot_2569-04-16_at_15.28.18.png" alt="Early wireframes" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Main Page</p>
        <h2 class="section-heading">A clear entry point to the service.</h2>
        <p class="section-text">The main page gives an overview of features and benefits with a clear call-to-action to begin configuration &mdash; without overwhelming users with technical details upfront.</p>
        <img class="cs-img" src="./projects/nipalb/1.png" alt="Main page" />
      </div>

      <div class="cs-section">
        <p class="section-label">Pricing Page</p>
        <h2 class="section-heading">Compare options without guesswork.</h2>
        <p class="section-text">A side-by-side pricing view for Standard and Dedicated Load Balancers. Designed to help users understand the difference and choose confidently &mdash; without needing to read documentation.</p>
        <img class="cs-img" src="./projects/nipalb/3.png" alt="Pricing page" />
      </div>

      <div class="cs-section">
        <p class="section-label">Calculator Page</p>
        <h2 class="section-heading">Configure and see the cost in real time.</h2>
        <p class="section-text">The main interaction page. Users configure their load balancer settings and see pricing update dynamically &mdash; making the relationship between choices and cost immediately clear.</p>
        <img class="cs-img" src="./projects/nipalb/2.png" alt="Calculator page" />
      </div>

      <div class="cs-section">
        <p class="section-label">Prototype</p>
        <h2 class="section-heading">Try it yourself.</h2>
        <p class="section-text">Interactive Figma prototype — click through the configuration and pricing flow.</p>
        <div class="cs-figma">
          <iframe
            src="https://embed.figma.com/proto/UvrzuawU8J6ysmlsFhvpU6/NIPA-LB?node-id=2-129&t=G9jUC0RgYOjDOUXV-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A129&embed-host=share&footer=false&theme=system"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">Cloud services, simplified.</h2>
        <p class="section-text">Easier onboarding for cloud services, reduced setup errors, and a clear path from configuration to pricing &mdash; making load balancing accessible to users who previously would have been blocked by technical complexity.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Reflection</p>
        <h2 class="section-heading">What I learned.</h2>
        <p class="section-text">Cloud products are only valuable if people can actually use them. Translating infrastructure logic into simple user decisions &mdash; without dumbing it down &mdash; requires deep understanding of both the technology and the user&rsquo;s mental model.</p>
        <div class="cs-quote">
          <p>Designing for cloud products requires translating complex infrastructure into simple user decisions.</p>
        </div>
      </div>
    `;

    if (id === 'nipa') return `
      <img class="cs-img" src="./projects/nipa/image 7.png" alt="NIPA Payment System cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Redesigning trust at the point of payment.</h2>
        <p class="section-text">NIPA's payment system is a critical part of their cloud platform, enabling users to top up credits for services. This project improved usability and consistency across 5 payment methods while migrating the UI to Design System 2.0 &mdash; ensuring a seamless, responsive experience at every screen size.</p>
        <div class="cs-tags">
          <span class="cs-tag">Credit Top-Up</span>
          <span class="cs-tag">Multi-Payment</span>
          <span class="cs-tag">Design System 2.0</span>
          <span class="cs-tag">Responsive</span>
          <span class="cs-tag">Production</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Problem</p>
        <h2 class="section-heading">An inconsistent experience on a critical flow.</h2>
        <p class="section-text">The existing payment experience lacked consistency, clarity, and scalability. For a cloud platform where credits power everything, a confusing top-up flow directly impacts user confidence and retention.</p>
        <ul class="cs-list">
          <li>Confusing payment flow across multiple methods</li>
          <li>Inconsistent UI from an outdated design system</li>
          <li>Lack of clear feedback during transactions</li>
          <li>Difficulty managing tax invoices</li>
          <li>Poor responsiveness across devices</li>
        </ul>
        <div class="cs-quote">
          <p>How might we redesign the payment experience to be simple, consistent, and scalable across multiple payment methods and devices?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Research</p>
        <h2 class="section-heading">What payment users actually care about.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item">
            <span class="cs-col2-label">Trust and clarity above all</span>
            <span class="cs-col2-text">Payments require users to hand over money. Any moment of confusion or inconsistency breaks trust. Every screen had to feel certain and transparent.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Speed and frictionlessness</span>
            <span class="cs-col2-text">Users want to top up fast and get back to work. The flow had to minimize steps and eliminate anything that didn't directly serve the transaction.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Different methods, different mental models</span>
            <span class="cs-col2-text">QR codes, card inputs, app redirects, and manual transfers each have distinct user expectations. Each method required its own optimized flow.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Consistency is non-negotiable</span>
            <span class="cs-col2-text">Migrating to Design System 2.0 wasn't just visual polish &mdash; it was the foundation for scalability, future features, and a predictable experience across the platform.</span>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Credit Top-Up</p>
        <h2 class="section-heading">Simple, guided, and clear.</h2>
        <p class="section-text">The top-up flow follows a clear step-by-step structure: Select Payment Method &rarr; Enter Details &rarr; Confirm Payment &rarr; Success / Receipt. Each step shows only what's needed, reducing cognitive load and friction.</p>
        <img class="cs-img" src="./projects/nipa/image.png" alt="Credit top-up screens" />
        <img class="cs-img" src="./projects/nipa/image 1.png" alt="Credit top-up screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Multi-Payment Support</p>
        <h2 class="section-heading">Five methods, each optimized.</h2>
        <p class="section-text">QR PromptPay for fast scan-and-pay. Card payment with a familiar input flow. Mobile Banking with app-based redirection. Alipay for international users. Manual Transfer as a fallback. Each method designed around its own mental model.</p>
        <img class="cs-img" src="./projects/nipa/image 2.png" alt="Payment method screens" />
        <img class="cs-img" src="./projects/nipa/image 3.png" alt="Payment method screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Responsive Design</p>
        <h2 class="section-heading">Consistent across every breakpoint.</h2>
        <p class="section-text">Designed across XL, LG, MD, SM, and XS breakpoints. Layouts adapt fluidly, components resize predictably, and the mobile experience is treated as a first-class use case &mdash; not an afterthought.</p>
        <img class="cs-img" src="./projects/nipa/Frame-3.png" alt="Responsive design" />
        <img class="cs-img" src="./projects/nipa/Frame.png" alt="Responsive design" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/nipa/Frame-1.png" alt="Responsive design" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/nipa/Frame-2.png" alt="Responsive design" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/nipa/Frame-4.png" alt="Responsive design" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Flow Preview</p>
        <h2 class="section-heading">End-to-end in motion.</h2>
        <img class="cs-img" src="./projects/nipa/image 4.png" alt="Flow preview" />
        <img class="cs-img" src="./projects/nipa/image 5.png" alt="Flow preview" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/nipa/image 6.png" alt="Flow preview" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <img class="cs-img" src="./projects/nipa/Display_case_LG_(1).png" alt="NIPA display case" style="border-radius:16px;" />
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">A payment experience the platform can grow on.</h2>
        <p class="section-text">Improved flow clarity, reduced friction during transactions, full Design System 2.0 alignment, and a scalable structure ready for future payment methods and features &mdash; all while improving usability across every device.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Reflection</p>
        <h2 class="section-heading">What I learned.</h2>
        <p class="section-text">Payment design lives or dies on trust. Even small inconsistencies &mdash; a misaligned label, an unclear confirmation state &mdash; can make users hesitate. Strong design system discipline was the key to making five different flows feel like one coherent experience.</p>
        <div class="cs-quote">
          <p>Payment design is about trust, clarity, and speed &mdash; even small UX improvements can significantly impact user confidence.</p>
        </div>
      </div>
    `;

    if (id === 'onebangkok') return `
      <img class="cs-img" src="./projects/onebangkok/cover.png" alt="One Bangkok App cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Bringing a premium app to life through motion.</h2>
        <p class="section-text">One Bangkok needed a visual showcase of their app for the company website &mdash; something more engaging than static screenshots. The goal was a short, polished video that communicated real interaction, flow, and the premium feel of the product.</p>
        <div class="cs-tags">
          <span class="cs-tag">Motion Design</span>
          <span class="cs-tag">UI Showcase</span>
          <span class="cs-tag">Jitter</span>
          <span class="cs-tag">Screen Transitions</span>
          <span class="cs-tag">Experimental</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Problem</p>
        <h2 class="section-heading">Static screens don&rsquo;t tell the story.</h2>
        <p class="section-text">Static UI screenshots felt flat and failed to communicate how the app actually felt to use. The team needed something that conveyed interaction, flow, and energy &mdash; quickly, and optimized for the web.</p>
        <ul class="cs-list">
          <li>Static screens don&rsquo;t communicate interaction or flow</li>
          <li>Needed to engage viewers in seconds</li>
          <li>No prior experience with motion design tools</li>
          <li>Had to be lightweight and optimized for web delivery</li>
        </ul>
        <div class="cs-quote">
          <p>How might I create a visually engaging product showcase video with no prior motion design experience?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Process</p>
        <h2 class="section-heading">Finding the right tool first.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item">
            <span class="cs-col2-label">Started with After Effects</span>
            <span class="cs-col2-text">Explored Adobe After Effects using templates. The steep learning curve, complexity, and slow iteration made it impractical for a one-week sprint focused on UI motion.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Switched to Jitter</span>
            <span class="cs-col2-text">Jitter is purpose-built for UI motion &mdash; beginner-friendly, fast to iterate, and designed around the kind of screen transitions and micro-interactions this project needed.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Learning motion fundamentals</span>
            <span class="cs-col2-text">Focused on keyframes, timing &amp; easing, and transitions between screens. Understanding these fundamentals made the difference between animation that felt mechanical and motion that felt designed.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Design approach</span>
            <span class="cs-col2-text">Keep it short and clear. Emphasize real app usage over flashy effects. Avoid overcomplicated animations. Prioritize readability and pacing throughout.</span>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Final Video</p>
        <h2 class="section-heading">Watch the showcase.</h2>
        <p class="section-text">Clean transitions between app screens, a focus on usability and flow rather than just visuals, and a consistent motion style throughout &mdash; lightweight and optimized for web.</p>
        <video controls style="width:100%;border-radius:16px;margin-top:28px;display:block;">
          <source src="./projects/onebangkok/showcase.mp4" type="video/mp4">
        </video>
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">A new skill, a polished deliverable.</h2>
        <p class="section-text">Delivered a polished showcase video for the company website, improved how the app is presented to clients, and added motion design as a new capability &mdash; all within a single week, starting from zero.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Reflection</p>
        <h2 class="section-heading">What I learned.</h2>
        <p class="section-text">Choosing the right tool isn&rsquo;t about what&rsquo;s most powerful &mdash; it&rsquo;s about what lets you focus on design rather than fighting software. Switching from After Effects to Jitter unlocked the whole project.</p>
        <div class="cs-quote">
          <p>The right tool can make a huge difference &mdash; choosing simplicity over complexity helped me focus on design, not just software.</p>
        </div>
      </div>
    `;

    if (id === 'jaga') return `
      <img class="cs-img" src="./projects/jaga/Frame.png" alt="JAGA App cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Real-time communication built into the game.</h2>
        <p class="section-text">JAGA is a golf school app supporting students and coaching programs. This project integrated a scalable, real-time communication system &mdash; chats, calls, groups &mdash; directly into the existing app, using CometChat as the underlying platform without disrupting JAGA&rsquo;s native navigation or experience.</p>
        <div class="cs-tags">
          <span class="cs-tag">Chat Integration</span>
          <span class="cs-tag">Voice &amp; Video Calls</span>
          <span class="cs-tag">Group Messaging</span>
          <span class="cs-tag">CometChat SDK</span>
          <span class="cs-tag">Production</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Problem</p>
        <h2 class="section-heading">Coaching happening everywhere except the app.</h2>
        <p class="section-text">JAGA lacked a built-in communication system. Students and coaches were coordinating across LINE, WhatsApp, and phone calls &mdash; fragmenting conversations, making follow-ups difficult, and reducing engagement within the platform.</p>
        <ul class="cs-list">
          <li>No built-in chat between students and coaches</li>
          <li>Communication scattered across external apps</li>
          <li>No structured group messaging for classes or training groups</li>
          <li>Difficult to manage coaching sessions and follow-ups</li>
          <li>No real-time interaction: calls, discussions, or feedback</li>
        </ul>
        <div class="cs-quote">
          <p>How might we integrate a seamless, scalable communication system into the JAGA app without disrupting the existing user experience?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Research &amp; Approach</p>
        <h2 class="section-heading">Build vs. buy &mdash; and how to make buy feel native.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item">
            <span class="cs-col2-label">Why not build from scratch?</span>
            <span class="cs-col2-text">Real-time chat infrastructure is complex and time-consuming to build reliably. A prebuilt solution accelerates delivery without sacrificing quality.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Why CometChat?</span>
            <span class="cs-col2-text">Prebuilt UI components, scalable infrastructure, rich features (chat, calls, groups), and a developer-friendly SDK that could be adapted to match JAGA&rsquo;s visual language.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">The navigation problem</span>
            <span class="cs-col2-text">CometChat&rsquo;s default layout includes its own navigation bar (Chats, Users, Groups, Calls) &mdash; which directly conflicted with JAGA&rsquo;s existing navigation structure.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">The design decision</span>
            <span class="cs-col2-text">We removed CometChat&rsquo;s navigation entirely and used only its modular components &mdash; Conversation List and Messages View &mdash; mapped into JAGA&rsquo;s own navigation system.</span>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Chats</p>
        <h2 class="section-heading">1:1, groups, and broadcasts.</h2>
        <p class="section-text">Full messaging between students and coaches, training group chats, and broadcast messaging for announcements. Includes media sharing, reactions, stickers, and read receipts &mdash; all consistent with JAGA&rsquo;s existing design language.</p>
        <img class="cs-img" src="./projects/jaga/image.png" alt="Chat screens" />
        <img class="cs-img" src="./projects/jaga/image 1.png" alt="Chat screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/jaga/image 2.png" alt="Chat screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/jaga/image 3.png" alt="Chat screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Calls</p>
        <h2 class="section-heading">Voice, video, and screen sharing.</h2>
        <p class="section-text">Voice and video calls for 1:1 coaching and group sessions. Call history, details view, and screen sharing support &mdash; enabling remote coaching with the same depth as in-person feedback.</p>
        <img class="cs-img" src="./projects/jaga/image 4.png" alt="Calls screens" />
        <img class="cs-img" src="./projects/jaga/image 5.png" alt="Calls screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Users</p>
        <h2 class="section-heading">Coach&ndash;student discovery.</h2>
        <p class="section-text">Browse and select users to start conversations. A simple, focused view that makes it easy for students to reach their coaches and vice versa &mdash; without extra friction.</p>
        <img class="cs-img" src="./projects/jaga/image 6.png" alt="Users screens" />
        <img class="cs-img" src="./projects/jaga/image 7.png" alt="Users screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Groups</p>
        <h2 class="section-heading">Organized by class, team, or program.</h2>
        <p class="section-text">Create and manage training groups, add or remove members, edit group details, and view group info &mdash; all within the same navigation flow as the rest of the app.</p>
        <img class="cs-img" src="./projects/jaga/image 8.png" alt="Groups screens" />
        <img class="cs-img" src="./projects/jaga/image 9.png" alt="Groups screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/jaga/image 10.png" alt="Groups screens" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/jaga/image 11.png" alt="Groups screens" style="margin-top:16px;" />
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">Communication that stays inside the app.</h2>
        <p class="section-text">By integrating CometChat&rsquo;s components into JAGA&rsquo;s own navigation, we delivered a fully native-feeling communication system &mdash; reducing reliance on external apps, improving coach&ndash;student engagement, and keeping training sessions better organized.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Reflection</p>
        <h2 class="section-heading">What I learned.</h2>
        <p class="section-text">Integrating third-party systems is as much a design challenge as a technical one. The key insight was that owning the navigation &mdash; not the components &mdash; is what makes an integration feel native rather than bolted on.</p>
        <div class="cs-quote">
          <p>Integrating third-party systems isn&rsquo;t just technical &mdash; it&rsquo;s a UX challenge of consistency, control, and user trust.</p>
        </div>
      </div>
    `;

    if (id === 'myanmarpass') return `
      <img class="cs-img" src="./projects/myanmarpass/Frame-1.png" alt="MyanmarPass cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">One platform for a million invisible workers.</h2>
        <p class="section-text">MyanmarPass is a unified digital platform designed to help Myanmar migrant workers in Thailand access legal registration, healthcare, financial services, and worker protection &mdash; all in one place. Built in a 10-day design sprint.</p>
        <div class="cs-tags">
          <span class="cs-tag">Registration</span>
          <span class="cs-tag">Digital Identity</span>
          <span class="cs-tag">Healthcare</span>
          <span class="cs-tag">Digital Wallet</span>
          <span class="cs-tag">Worker Protection</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Problem</p>
        <h2 class="section-heading">Fragmented systems, invisible people.</h2>
        <p class="section-text">Millions of Myanmar migrant workers in Thailand face barriers accessing legal employment, healthcare, and financial systems. Many lack official documentation and must rely on fragmented, manual processes &mdash; leaving them vulnerable to exploitation and legal risk.</p>
        <ul class="cs-list">
          <li>No access to legal ID or documentation</li>
          <li>Expensive and complex agency-based registration</li>
          <li>Limited access to healthcare services</li>
          <li>No safe way to report abuse or unfair treatment</li>
          <li>Difficulty sending money back home</li>
          <li>Risk of illegal border crossing and legal consequences</li>
        </ul>
        <div class="cs-quote">
          <p>How might we design a secure, all-in-one platform that enables migrant workers to register legally, access essential services, and protect their rights?</p>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Research</p>
        <h2 class="section-heading">Designing for the most vulnerable users.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item">
            <span class="cs-col2-label">Trust is critical</span>
            <span class="cs-col2-text">Users fear authorities and scams. Every design decision had to communicate safety, legitimacy, and government backing without being intimidating.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Simplicity is essential</span>
            <span class="cs-col2-text">Many users are not tech-savvy. Large UI elements, minimal steps, and clear visual hierarchy were non-negotiable &mdash; not nice-to-haves.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">Mobile-first is required</span>
            <span class="cs-col2-text">Smartphones are the primary &mdash; often only &mdash; device. The entire platform was designed around the phone screen as the source of truth.</span>
          </div>
          <div class="cs-col2-item">
            <span class="cs-col2-label">End-to-end flow is missing</span>
            <span class="cs-col2-text">Current systems are fragmented across agencies, apps, and physical offices. The entire value of MyanmarPass is unifying all of this into a single journey.</span>
          </div>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Design Approach</p>
        <h2 class="section-heading">Four core journeys, one trusted app.</h2>
        <p class="section-text">Designed around four primary user flows: Registration &rarr; ID issuance &rarr; Work permit. Health check &rarr; Consultation. Earn money &rarr; Send money home. Report issue &rarr; Contact authorities. Each flow was stripped to its fewest possible steps, with status tracking and trust signals built in throughout.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Registration &amp; Worker Protection</p>
        <h2 class="section-heading">A safe place to start.</h2>
        <p class="section-text">A centralized hub for workers to register legally and report issues &mdash; abuse, unpaid wages, unfair treatment &mdash; with direct connection to government agencies through official, verified channels.</p>
        <img class="cs-img" src="./projects/myanmarpass/image.png" alt="Registration and worker protection screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">Digital Identity</p>
        <h2 class="section-heading">A 13-digit ID for the undocumented.</h2>
        <p class="section-text">Workers without existing documentation can apply for a government-issued 13-digit ID directly through the app &mdash; with real-time application tracking so they always know where they stand.</p>
        <img class="cs-img" src="./projects/myanmarpass/image 1.png" alt="Digital identity screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">Healthcare Access</p>
        <h2 class="section-heading">Health checks built into onboarding.</h2>
        <p class="section-text">Mandatory health screening is integrated directly into the registration flow. After onboarding, workers have 24/7 access to licensed doctors and a nationwide hospital network &mdash; no separate system needed.</p>
        <img class="cs-img" src="./projects/myanmarpass/image 2.png" alt="Healthcare access screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">Digital Wallet &amp; Financial Services</p>
        <h2 class="section-heading">Banking without a bank account.</h2>
        <p class="section-text">A secure in-app wallet gives unbanked workers access to financial services &mdash; including cross-border money transfers home to Myanmar, through partnerships with licensed financial institutions.</p>
        <img class="cs-img" src="./projects/myanmarpass/image 3.png" alt="Digital wallet screens" />
      </div>

      <div class="cs-section">
        <p class="section-label">Cross-Border Delivery &amp; Work Permit</p>
        <h2 class="section-heading">More than identity &mdash; a full support system.</h2>
        <p class="section-text">Workers can send goods safely to Myanmar with real-time tracking and multiple payment options. Work permit status and renewal reminders are tracked in the same app, with verified employer profiles to reduce exploitation.</p>
        <img class="cs-img" src="./projects/myanmarpass/image 4.png" alt="Cross-border delivery screens" />
        <img class="cs-img" src="./projects/myanmarpass/image 5.png" alt="Work permit management screens" style="margin-top:16px;" />
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">Visibility, safety, and dignity at scale.</h2>
        <p class="section-text">MyanmarPass aims to increase legal worker registration, reduce exploitation and illegal employment, improve access to healthcare and financial services, and strengthen government visibility &mdash; all while enabling safer cross-border support for workers&rsquo; families.</p>
      </div>

      <div class="cs-section">
        <p class="section-label">Reflection</p>
        <h2 class="section-heading">What I learned.</h2>
        <p class="section-text">This was the most human-centred project I have worked on. Designing for vulnerable users means every extra step, every confusing label, every moment of distrust has a real cost. Clarity and accessibility are not polish &mdash; they are the product.</p>
        <div class="cs-quote">
          <p>Designing for vulnerable users requires prioritizing trust, clarity, and accessibility over complexity and features.</p>
        </div>
      </div>
    `;

    if (id === 'submarine') return `
      <img class="cs-img" src="./projects/submarine/image.png" alt="Piston Ballast Tank Submarine cover" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">A submarine that dives by adjusting volume, not pumping water.</h2>
        <p class="section-text">This project demonstrates the design and function of a piston-based ballast system used in a submarine. The goal is to control buoyancy by adjusting internal volume rather than taking in or expelling water. A mechanical piston changes displacement, allowing the submarine to sink or rise in a controlled way.</p>
        <div class="cs-tags">
          <span class="cs-tag">Fusion 360</span>
          <span class="cs-tag">Mechanical Design</span>
          <span class="cs-tag">Buoyancy System</span>
          <span class="cs-tag">CAD</span>
          <span class="cs-tag">University</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Objectives</p>
        <h2 class="section-heading">What this had to do.</h2>
        <ul class="cs-list">
          <li>Design a submarine that can submerge and resurface</li>
          <li>Control the ballast tank in pitch direction</li>
          <li>Control forward and backward movement</li>
          <li>Obtain point cloud from depth camera for survey &amp; detection</li>
          <li>Apply principles of buoyancy and Archimedes' principle</li>
          <li>Create a working CAD model showing movement &amp; structure</li>
        </ul>
      </div>

      <div class="cs-section">
        <p class="section-label">3D Model</p>
        <h2 class="section-heading">Explore the assembly.</h2>
        <p class="section-text">Drag to rotate &mdash; scroll to zoom.</p>
        <div class="cs-3d-viewer">
          <model-viewer src="./projects/submarine/model.glb" alt="Submarine 3D model"
            camera-controls auto-rotate auto-rotate-delay="800" rotation-per-second="18deg"
            shadow-intensity="1.4" shadow-softness="0.9" environment-image="neutral"
            exposure="0.72" tone-mapping="neutral" style="background:#6e6e6e;">
          </model-viewer>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Design Process</p>
        <h2 class="section-heading">From first iteration to final concept.</h2>
        <img class="cs-img" src="./projects/submarine/slide-first-iteration.png" alt="First iteration — dual cylinder layout with engineering drawings" />
        <img class="cs-img" src="./projects/submarine/slide-exploded.png" alt="Exploded assembly view of the ballast tank system" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/submarine/slide-final-concept.png" alt="Final concept engineering drawings" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Final Design</p>
        <h2 class="section-heading">Four-cylinder modular assembly.</h2>
        <img class="cs-img" src="./projects/submarine/slide-final-design.png" alt="Final design render" />
        <img class="cs-img" src="./projects/submarine/slide-final-detail.png" alt="Final design — piston extended and retracted states" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/submarine/slide-top-view.png" alt="Top and bottom views of final assembly" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/submarine/Screenshot_2569-04-20_at_11.02.26.png" alt="Submarine assembly view" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/submarine/Screenshot_2569-04-20_at_11.02.03.png" alt="Submarine detail" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/submarine/Screenshot_2569-04-20_at_11.02.15.png" alt="Submarine detail" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/submarine/Screenshot_2569-04-20_at_11.04.03.png" alt="Submarine section view" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/submarine/Screenshot_2569-04-20_at_11.03.38.png" alt="Submarine section view" style="margin-top:16px;" />
      </div>
    `;

    if (id === 'hera') return `
      <img class="cs-img" src="./projects/hera/Screenshot_2569-04-20_at_10.51.40.png" alt="RISA robot render" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">An AI-powered robot assistant built for university life.</h2>
        <p class="section-text">RISA (Robotic Interactive Smart Assistant) is an autonomous mobile robot built for the Robotics &amp; AI Engineering department. It navigates independently around the lab using LiDAR and ROS, answers student questions through an LLM backed by a RAG pipeline, and recognizes faces to personalize interactions. A team of four built the full stack — hardware, AI, and interface. My role was the physical design: robot body, display mount, and assembly.</p>
        <div class="cs-tags">
          <span class="cs-tag">Service Robot</span>
          <span class="cs-tag">Industrial Design</span>
          <span class="cs-tag">Fusion 360</span>
          <span class="cs-tag">3D Printing</span>
          <span class="cs-tag">ROS</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Body Design</p>
        <h2 class="section-heading">Four floors. Everything in its place.</h2>
        <p class="section-text">The cylindrical body is organized into four stacked floors: the bottom floor houses the battery and power components, the second holds the LiDAR sensor at the ideal scanning height, the third carries the main processing board, and the top floor anchors the wheel attachment system. A separate rotating head unit — a screen mount designed for face-level interaction — sits above the body.</p>
        <img class="cs-img" src="./projects/hera/KG.png" alt="Robot body 3D render" style="margin-top:28px;" />
        <img class="cs-img" src="./projects/hera/KG_(3).png" alt="Floor breakdown diagram" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/KG_(4).png" alt="Head and display unit renders" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/KG_(2).png" alt="Shelf carrier variant design" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">3D Model</p>
        <h2 class="section-heading">Explore the assembly.</h2>
        <p class="section-text">Full mechanical assembly modelled in Autodesk Fusion 360. Drag to orbit, scroll to zoom.</p>
        <div class="cs-3d-viewer">
          <model-viewer src="./projects/hera/model.glb" alt="RISA robot 3D model"
            camera-controls auto-rotate auto-rotate-delay="800" rotation-per-second="14deg"
            shadow-intensity="1.2" shadow-softness="0.85" environment-image="neutral"
            exposure="0.78" tone-mapping="neutral" style="background:#5a6a72;">
          </model-viewer>
        </div>
        <img class="cs-img" src="./projects/hera/Screenshot_2569-04-20_at_10.52.02.png" alt="Fusion 360 render side" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/Screenshot_2569-04-20_at_11.05.48.png" alt="Component detail view" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/Screenshot_2569-04-20_at_11.06.00.png" alt="Component detail view" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/Screenshot_2569-04-20_at_11.06.22.png" alt="Assembly exploded view" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Build</p>
        <h2 class="section-heading">3D printed, then assembled.</h2>
        <p class="section-text">Shell panels were 3D printed in sections and assembled around the mechanical frame. Multiple print iterations were needed to dial in tolerances between the curved panels and the internal hardware mounts.</p>
        <img class="cs-img" src="./projects/hera/KG_(5).png" alt="3D printing process" style="margin-top:28px;" />
        <img class="cs-img" src="./projects/hera/KG_(6).png" alt="Assembly and integration" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">System</p>
        <h2 class="section-heading">Hardware and software working together.</h2>
        <p class="section-text">RISA's navigation runs on ROS, fed by a LiDAR and IMU. For conversation, OpenAI Whisper handles speech recognition and BotNoi handles TTS output. Questions are answered by Llama 3.2 + Mistral, backed by a RAG pipeline — program data loaded from PDFs, split, embedded, and stored in Chroma vector DB via MongoDB.</p>
        <img class="cs-img" src="./projects/hera/13.png" alt="System flow diagram" style="margin-top:28px;" />
        <img class="cs-img" src="./projects/hera/Nanon.png" alt="Full methodology diagram" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/Phoom.png" alt="ROS navigation stack" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/Phoom_(2).png" alt="LiDAR map of HM Robotic Lab" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Interface</p>
        <h2 class="section-heading">Two modes: talk or navigate.</h2>
        <p class="section-text">The React + Flask interface starts with an animated welcome screen, then lets users choose between Interactive Mode (conversational Q&amp;A) and Navigation Mode (autonomous pathfinding inside the lab).</p>
        <img class="cs-img" src="./projects/hera/Phoom_(6).png" alt="Welcome screen and mode selection" style="margin-top:28px;" />
        <img class="cs-img" src="./projects/hera/Phoom_(7).png" alt="Interactive and navigation mode screens" style="margin-top:16px;" />
      </div>

      <div class="cs-section">
        <p class="section-label">Results</p>
        <h2 class="section-heading">Tested, validated, and presented internationally.</h2>
        <p class="section-text">Human detection achieved over 90% confidence under natural indoor lighting using YOLOv5s. Face recognition reached 70–75% accuracy at recommended dataset sizes. The LLM with RAG pipeline correctly answered 9 of 10 unit test questions on curriculum and department data. The project was presented at an International Symposium at VISTEC (Vidyasirimedhi Institute of Science and Technology).</p>
        <img class="cs-img" src="./projects/hera/Phoom_(8).png" alt="Detection and recognition results" style="margin-top:28px;" />
        <img class="cs-img" src="./projects/hera/Nanon_(4).png" alt="LLM with RAG unit test results" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/Jn_(5).png" alt="International Symposium at VISTEC" style="margin-top:16px;" />
        <img class="cs-img" src="./projects/hera/video.png" alt="RISA team with robot" style="margin-top:16px;" />
      </div>

      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">From CAD to code — a full-stack robot.</h2>
        <p class="section-text">RISA brought together autonomous navigation, AI conversation, and a custom-built physical form into a single working prototype. Designing the body taught me to think about industrial constraints (print tolerances, wire routing, sensor clearances) as design problems — not afterthoughts.</p>
      </div>
    `;

    if (id === 'software') return `
      <img class="cs-img" src="./projects/weather/18.png" alt="Simple Weather App" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Real-time weather in a clean Flutter UI.</h2>
        <p class="section-text">A Flutter weather app that displays live forecast data using the OpenWeatherMap API. Features blurred cards, dynamic weather icons, an hourly scroll, and key metrics — humidity, wind speed, and pressure.</p>
        <div class="cs-tags">
          <span class="cs-tag">Flutter</span>
          <span class="cs-tag">OpenWeatherMap API</span>
          <span class="cs-tag">FutureBuilder</span>
          <span class="cs-tag">Custom Widgets</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">Networking</span><span class="cs-col2-text">HTTP REST call with <code>http</code> package and <code>jsonDecode</code></span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Async UI</span><span class="cs-col2-text"><code>FutureBuilder</code> for async state and <code>RefreshIndicator.adaptive</code> for pull-to-refresh</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Layout</span><span class="cs-col2-text">Blurred cards with <code>BackdropFilter</code>, <code>ListView.builder</code> for horizontal hourly scroll</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Custom Widgets</span><span class="cs-col2-text"><code>HourlyFocusItem</code>, <code>AdditionalInfoItem</code>, dynamic icon based on weather condition</span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">weather_screen.dart</span></div>
        <pre><code><span class="tok-typ">Future</span>&lt;<span class="tok-typ">Map</span>&lt;<span class="tok-typ">String</span>, <span class="tok-typ">dynamic</span>&gt;&gt; <span class="tok-fn">getCurrentWeather</span>() <span class="tok-kw">async</span> {
  <span class="tok-kw">try</span> {
    <span class="tok-typ">String</span> cityName = <span class="tok-str">'Bangkok'</span>;
    <span class="tok-kw">final</span> res = <span class="tok-kw">await</span> http.<span class="tok-fn">get</span>(
      <span class="tok-typ">Uri</span>.<span class="tok-fn">parse</span>(
        <span class="tok-str">'http://api.openweathermap.org/data/2.5/forecast?q=<span class="tok-at">$cityName</span>&APPID=<span class="tok-at">$openWeatherAPIKey</span>'</span>,
      ),
    );
    <span class="tok-kw">final</span> data = <span class="tok-fn">jsonDecode</span>(res.body);
    <span class="tok-kw">if</span> (data[<span class="tok-str">'cod'</span>] != <span class="tok-str">'200'</span>) {
      <span class="tok-kw">throw</span> <span class="tok-str">'An unexpected error occurred'</span>;
    }
    <span class="tok-kw">return</span> data;
  } <span class="tok-kw">catch</span> (e) {
    <span class="tok-kw">throw</span> e.<span class="tok-fn">toString</span>();
  }
}

<span class="tok-cm">// FutureBuilder wires the async result to the UI</span>
<span class="tok-typ">FutureBuilder</span>(
  future: weather,
  builder: (context, snapshot) {
    <span class="tok-kw">if</span> (snapshot.connectionState == <span class="tok-typ">ConnectionState</span>.waiting) {
      <span class="tok-kw">return</span> <span class="tok-typ">Center</span>(child: <span class="tok-kw">const</span> <span class="tok-typ">CircularProgressIndicator</span>.<span class="tok-fn">adaptive</span>());
    }
    <span class="tok-kw">final</span> data = snapshot.data!;
    <span class="tok-kw">final</span> currentTempC = (data[<span class="tok-str">'list'</span>][<span class="tok-num">0</span>][<span class="tok-str">'main'</span>][<span class="tok-str">'temp'</span>] - <span class="tok-num">273.15</span>).<span class="tok-fn">toStringAsFixed</span>(<span class="tok-num">2</span>);
    <span class="tok-kw">return</span> <span class="tok-typ">ListView</span>( <span class="tok-cm">/* ... cards ... */</span> );
  },
)</code></pre>
      </div>

      <img class="cs-img" src="./projects/weather/19.png" alt="Weather App screens" style="margin-top:40px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Async data + clean UI composition.</h2>
        <p class="section-text">Connecting a live REST API to reactive Flutter widgets while keeping the UI legible under different data states was the core challenge here — and a foundation for everything that followed.</p>
      </div>
    `;

    if (id === 'onboarding') return `
      <img class="cs-img" src="./projects/onboarding/20.png" alt="Onboarding Screen" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">A swipeable onboarding flow for mobile commerce.</h2>
        <p class="section-text">A Flutter onboarding screen for an e-commerce app that walks new users through key features with smooth page transitions, dot navigation, and skip/next controls — all managed reactively with GetX.</p>
        <div class="cs-tags">
          <span class="cs-tag">Flutter</span>
          <span class="cs-tag">GetX</span>
          <span class="cs-tag">SmoothPageIndicator</span>
          <span class="cs-tag">PageView</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">State Management</span><span class="cs-col2-text">GetX with <code>Rx&lt;int&gt;</code> and controller injection for reactive page tracking</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Navigation</span><span class="cs-col2-text"><code>PageController.animateToPage</code> for animated transitions and skip-to-end logic</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Custom Widgets</span><span class="cs-col2-text">Reusable <code>OnBoardingPage</code>, <code>OnBoardingNextButton</code>, dot navigation components</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Layout</span><span class="cs-col2-text"><code>Stack</code> overlay positioning for button and indicator placement over the page content</span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">onboarding.dart</span></div>
        <pre><code><span class="tok-kw">class</span> <span class="tok-typ">OnBoardingScreen</span> <span class="tok-kw">extends</span> <span class="tok-typ">StatelessWidget</span> {
  <span class="tok-at">@override</span>
  <span class="tok-typ">Widget</span> <span class="tok-fn">build</span>(<span class="tok-typ">BuildContext</span> context) {
    <span class="tok-kw">final</span> controller = <span class="tok-typ">Get</span>.<span class="tok-fn">put</span>(<span class="tok-typ">OnBoardingController</span>());

    <span class="tok-kw">return</span> <span class="tok-typ">Scaffold</span>(
      body: <span class="tok-typ">Stack</span>(
        children: [
          <span class="tok-typ">PageView</span>(
            controller: controller.pageController,
            onPageChanged: controller.updatePageIndicator,
            children: [
              <span class="tok-typ">OnBoardingPage</span>(image: <span class="tok-typ">TImages</span>.onBoardingImage1, title: <span class="tok-typ">TTexts</span>.onBoardingTitle1),
              <span class="tok-typ">OnBoardingPage</span>(image: <span class="tok-typ">TImages</span>.onBoardingImage2, title: <span class="tok-typ">TTexts</span>.onBoardingTitle2),
              <span class="tok-typ">OnBoardingPage</span>(image: <span class="tok-typ">TImages</span>.onBoardingImage3, title: <span class="tok-typ">TTexts</span>.onBoardingTitle3),
            ],
          ),
          <span class="tok-typ">OnBoardingSkip</span>(),        <span class="tok-cm">// Positioned top-right</span>
          <span class="tok-typ">OnBoardingDotNavigation</span>(), <span class="tok-cm">// SmoothPageIndicator</span>
          <span class="tok-typ">OnBoardingNextButton</span>(),    <span class="tok-cm">// Circular arrow button</span>
        ],
      ),
    );
  }
}</code></pre>
      </div>

      <img class="cs-img" src="./projects/onboarding/21.png" alt="Onboarding screens" style="margin-top:40px;" />
      <img class="cs-img" src="./projects/onboarding/22.png" alt="Onboarding detail" style="margin-top:16px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Clean separation of logic and presentation.</h2>
        <p class="section-text">Using GetX enforced a clean controller/screen split — keeping all page logic out of the widget tree and making each component independently reusable.</p>
      </div>
    `;

    if (id === 'loginscreen') return `
      <img class="cs-img" src="./projects/loginscreen/23.png" alt="Login screen" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">A complete auth flow — login, signup, recovery.</h2>
        <p class="section-text">A Flutter authentication flow for a mobile commerce app covering login, signup, email verification, and password recovery. The UI emphasises clean component reuse and reactive navigation via GetX.</p>
        <div class="cs-tags">
          <span class="cs-tag">Flutter</span>
          <span class="cs-tag">GetX</span>
          <span class="cs-tag">Modular UI</span>
          <span class="cs-tag">Dark Mode</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">Navigation</span><span class="cs-col2-text">GetX <code>Get.to</code>, <code>Get.off</code>, <code>Get.offAll</code> for clean stack management across auth steps</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Reusable UI</span><span class="cs-col2-text">Modular widgets — <code>TLoginForm</code>, <code>TSignupForm</code>, <code>TSocialButtons</code>, <code>TFormDivider</code></span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Adaptive Theming</span><span class="cs-col2-text">Dark/light mode detection via custom helper, consistent spacing through <code>TSizes</code> constants</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Form Design</span><span class="cs-col2-text">Multi-field signup with terms checkbox, password visibility toggle, remember me, and forget-password flow</span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">login_form.dart</span></div>
        <pre><code><span class="tok-kw">class</span> <span class="tok-typ">TLoginForm</span> <span class="tok-kw">extends</span> <span class="tok-typ">StatelessWidget</span> {
  <span class="tok-at">@override</span>
  <span class="tok-typ">Widget</span> <span class="tok-fn">build</span>(<span class="tok-typ">BuildContext</span> context) {
    <span class="tok-kw">return</span> <span class="tok-typ">Form</span>(
      child: <span class="tok-typ">Column</span>(
        children: [
          <span class="tok-typ">TextFormField</span>(decoration: <span class="tok-typ">InputDecoration</span>(labelText: <span class="tok-typ">TTexts</span>.email)),
          <span class="tok-typ">TextFormField</span>(decoration: <span class="tok-typ">InputDecoration</span>(
            labelText: <span class="tok-typ">TTexts</span>.password,
            suffixIcon: <span class="tok-typ">Icon</span>(<span class="tok-typ">Iconsax</span>.eye_slash),
          )),
          <span class="tok-typ">SizedBox</span>(
            width: <span class="tok-typ">double</span>.infinity,
            child: <span class="tok-typ">ElevatedButton</span>(onPressed: () {}, child: <span class="tok-typ">Text</span>(<span class="tok-typ">TTexts</span>.signIn)),
          ),
          <span class="tok-typ">OutlinedButton</span>(
            onPressed: () =&gt; <span class="tok-typ">Get</span>.<span class="tok-fn">to</span>(() =&gt; <span class="tok-typ">SignupScreen</span>()),
            child: <span class="tok-typ">Text</span>(<span class="tok-typ">TTexts</span>.createAccount),
          ),
        ],
      ),
    );
  }
}

<span class="tok-cm">// Forget password routes to reset flow</span>
<span class="tok-typ">TextButton</span>(
  onPressed: () =&gt; <span class="tok-typ">Get</span>.<span class="tok-fn">to</span>(() =&gt; <span class="tok-kw">const</span> <span class="tok-typ">ForgetPassword</span>()),
  child: <span class="tok-typ">Text</span>(<span class="tok-typ">TTexts</span>.forgetPassword),
)</code></pre>
      </div>

      <img class="cs-img" src="./projects/loginscreen/24.png" alt="Signup screen" style="margin-top:40px;" />
      <img class="cs-img" src="./projects/loginscreen/25.png" alt="Verification screen" style="margin-top:16px;" />
      <img class="cs-img" src="./projects/loginscreen/26.png" alt="Password recovery" style="margin-top:16px;" />
      <img class="cs-img" src="./projects/loginscreen/27.png" alt="Reset password screen" style="margin-top:16px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Full auth coverage from one modular system.</h2>
        <p class="section-text">Building every screen as a self-contained widget with shared constants meant changes to spacing or theming propagated everywhere without touching individual screens.</p>
      </div>
    `;

    if (id === 'apollo') return `
      <img class="cs-img" src="./projects/apollo/Untitled_design.png" alt="MoonShot app" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Apollo mission data in grid and list.</h2>
        <p class="section-text">MoonShot is a SwiftUI app presenting Apollo space mission data — switchable between grid and list layouts, with navigation to mission detail pages and astronaut profiles. Data is decoded from local JSON.</p>
        <div class="cs-tags">
          <span class="cs-tag">SwiftUI</span>
          <span class="cs-tag">JSON Decoding</span>
          <span class="cs-tag">NavigationStack</span>
          <span class="cs-tag">Grid &amp; List</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">Layout</span><span class="cs-col2-text"><code>LazyVGrid</code> with adaptive columns and <code>List</code> with custom row styling — toggleable at runtime</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Navigation</span><span class="cs-col2-text"><code>NavigationStack</code> with <code>NavigationLink</code> drilling into mission and astronaut detail views</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Data</span><span class="cs-col2-text">Generic <code>Bundle.decode&lt;T: Codable&gt;</code> extension for type-safe JSON loading with full error handling</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Theming</span><span class="cs-col2-text">Custom <code>ShapeStyle</code> extension for <code>darkBackground</code> / <code>lightBackground</code> colour tokens</span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">ContentView.swift</span></div>
        <pre><code><span class="tok-kw">struct</span> <span class="tok-typ">ContentView</span>: <span class="tok-typ">View</span> {
    <span class="tok-kw">let</span> astronauts: [<span class="tok-typ">String</span>: <span class="tok-typ">Astronaut</span>] = <span class="tok-typ">Bundle</span>.main.<span class="tok-fn">decode</span>(<span class="tok-str">"astronauts.json"</span>)
    <span class="tok-kw">let</span> missions: [<span class="tok-typ">Mission</span>] = <span class="tok-typ">Bundle</span>.main.<span class="tok-fn">decode</span>(<span class="tok-str">"missions.json"</span>)
    <span class="tok-at">@State</span> <span class="tok-kw">private var</span> showingGrid = <span class="tok-kw">true</span>

    <span class="tok-kw">var</span> body: <span class="tok-kw">some</span> <span class="tok-typ">View</span> {
        <span class="tok-typ">NavigationStack</span> {
            <span class="tok-typ">Group</span> {
                <span class="tok-kw">if</span> showingGrid {
                    <span class="tok-typ">GridLayout</span>(astronauts: astronauts, missions: missions)
                } <span class="tok-kw">else</span> {
                    <span class="tok-typ">ListLayout</span>(astronauts: astronauts, missions: missions)
                }
            }
            .toolbar {
                <span class="tok-typ">ToolbarItem</span>(placement: .navigationBarTrailing) {
                    <span class="tok-typ">Button</span> { showingGrid.toggle() } label: {
                        <span class="tok-typ">Image</span>(systemName: showingGrid ? <span class="tok-str">"list.bullet"</span> : <span class="tok-str">"square.grid.2x2"</span>)
                    }
                }
            }
        }
    }
}

<span class="tok-cm">// Generic JSON loader used for both data files</span>
<span class="tok-kw">func</span> <span class="tok-fn">decode</span>&lt;T: <span class="tok-typ">Codable</span>&gt;(<span class="tok-kw">_</span> file: <span class="tok-typ">String</span>) -&gt; T {
    <span class="tok-kw">guard let</span> url = self.<span class="tok-fn">url</span>(forResource: file, withExtension: <span class="tok-kw">nil</span>) <span class="tok-kw">else</span> {
        <span class="tok-fn">fatalError</span>(<span class="tok-str">"Failed to locate \(file) in bundle."</span>)
    }
    <span class="tok-kw">return</span> <span class="tok-kw">try</span>! <span class="tok-typ">JSONDecoder</span>().<span class="tok-fn">decode</span>(T.<span class="tok-kw">self</span>, from: <span class="tok-kw">try</span>! <span class="tok-typ">Data</span>(contentsOf: url))
}</code></pre>
      </div>

      <img class="cs-img" src="./projects/apollo/1.png" alt="MoonShot grid view" style="margin-top:40px;" />
      <img class="cs-img" src="./projects/apollo/3.png" alt="MoonShot mission detail" style="margin-top:16px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Adaptive layouts and type-safe data loading.</h2>
        <p class="section-text">Writing a reusable generic decoder over <code>Bundle</code> meant adding any new data type was one line — and the runtime layout toggle showed how SwiftUI's <code>Group</code> makes view switching effortless.</p>
      </div>
    `;

    if (id === 'px500') return `
      <img class="cs-img" src="./projects/px500/4.png" alt="500px API App" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Popular photos from a live REST API.</h2>
        <p class="section-text">A SwiftUI app that fetches popular photos from the 500px API, displaying them in a scrollable list with async image loading, like counts, and pull-to-refresh — all wired with Swift concurrency.</p>
        <div class="cs-tags">
          <span class="cs-tag">SwiftUI</span>
          <span class="cs-tag">500px API</span>
          <span class="cs-tag">AsyncImage</span>
          <span class="cs-tag">Swift Concurrency</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">Networking</span><span class="cs-col2-text"><code>URLSession.shared.data</code> with <code>async/await</code> and <code>JSONDecoder</code> for REST response mapping</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Async Images</span><span class="cs-col2-text"><code>AsyncImage</code> with placeholder <code>ProgressView</code> and fill/clip for consistent thumbnail sizing</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Lifecycle</span><span class="cs-col2-text"><code>.task</code> modifier for on-appear fetch and <code>.refreshable</code> for pull-to-refresh without manual state</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Data Model</span><span class="cs-col2-text">Custom <code>CodingKeys</code> mapping snake_case API fields to camelCase Swift properties</span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">ContentView.swift</span></div>
        <pre><code><span class="tok-kw">func</span> <span class="tok-fn">fetchData</span>() <span class="tok-kw">async</span> {
    <span class="tok-kw">guard let</span> url = <span class="tok-typ">URL</span>(string: <span class="tok-str">"https://api.500px.com/v1/photos?feature=popular&page=1"</span>) <span class="tok-kw">else</span> { <span class="tok-kw">return</span> }
    <span class="tok-kw">do</span> {
        <span class="tok-kw">let</span> (data, _) = <span class="tok-kw">try await</span> <span class="tok-typ">URLSession</span>.shared.<span class="tok-fn">data</span>(from: url)
        <span class="tok-kw">let</span> decoded = <span class="tok-kw">try</span> <span class="tok-typ">JSONDecoder</span>().<span class="tok-fn">decode</span>(<span class="tok-typ">ApiResponse</span>.<span class="tok-kw">self</span>, from: data)
        <span class="tok-typ">DispatchQueue</span>.main.<span class="tok-kw">async</span> { photos = decoded.photos }
    } <span class="tok-kw">catch</span> { <span class="tok-fn">print</span>(<span class="tok-str">"Failed to decode: \(error)"</span>) }
}

<span class="tok-cm">// CodingKeys maps snake_case API fields to camelCase</span>
<span class="tok-kw">enum</span> <span class="tok-typ">CodingKeys</span>: <span class="tok-typ">String</span>, <span class="tok-typ">CodingKey</span> {
    <span class="tok-kw">case</span> id, name, description
    <span class="tok-kw">case</span> imageUrls           = <span class="tok-str">"image_url"</span>
    <span class="tok-kw">case</span> positiveVotesCount  = <span class="tok-str">"positive_votes_count"</span>
}

<span class="tok-cm">// .task fires on appear; .refreshable adds pull-to-refresh</span>
<span class="tok-typ">List</span>(photos) { photo <span class="tok-kw">in</span> <span class="tok-cm">/* row */</span> }
    .<span class="tok-fn">task</span>        { <span class="tok-kw">await</span> <span class="tok-fn">fetchData</span>() }
    .<span class="tok-fn">refreshable</span> { <span class="tok-kw">await</span> <span class="tok-fn">fetchData</span>() }</code></pre>
      </div>

      <img class="cs-img" src="./projects/px500/5.png" alt="500px app list" style="margin-top:40px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Swift concurrency makes async feel synchronous.</h2>
        <p class="section-text"><code>async/await</code> eliminated the nested callback structure entirely — the fetch, decode, and UI update read as a straight sequence, which made error handling and refresh logic trivial to reason about.</p>
      </div>
    `;

    if (id === 'iexpense') return `
      <img class="cs-img" src="./projects/iexpense/Untitled_design_(1).png" alt="iExpense App" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Track personal and business spending.</h2>
        <p class="section-text">iExpense is a SwiftUI app for logging expenses by category. Items are split into Personal and Business sections, colour-coded by amount, and persisted across launches using UserDefaults.</p>
        <div class="cs-tags">
          <span class="cs-tag">SwiftUI</span>
          <span class="cs-tag">UserDefaults</span>
          <span class="cs-tag">@Observable</span>
          <span class="cs-tag">Sectioned List</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">Persistence</span><span class="cs-col2-text"><code>UserDefaults</code> with <code>JSONEncoder</code>/<code>JSONDecoder</code> triggered by <code>@Observable</code> <code>didSet</code></span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">List UX</span><span class="cs-col2-text">Sectioned <code>List</code> with swipe-to-delete, filtered by category, and colour-coded dot by spend tier</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Form Input</span><span class="cs-col2-text">Inline toolbar text field for expense name, segmented picker for type, currency-formatted amount input</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Navigation</span><span class="cs-col2-text"><code>NavigationStack</code> push to add-view with <code>dismiss</code> environment key on save or cancel</span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">ContentView.swift</span></div>
        <pre><code><span class="tok-at">@Observable</span>
<span class="tok-kw">class</span> <span class="tok-typ">Expenses</span> {
    <span class="tok-kw">var</span> items = [<span class="tok-typ">ExpenseItem</span>]() {
        <span class="tok-kw">didSet</span> {
            <span class="tok-kw">if let</span> encoded = <span class="tok-kw">try</span>? <span class="tok-typ">JSONEncoder</span>().<span class="tok-fn">encode</span>(items) {
                <span class="tok-typ">UserDefaults</span>.standard.<span class="tok-fn">set</span>(encoded, forKey: <span class="tok-str">"Items"</span>)
            }
        }
    }
    <span class="tok-kw">init</span>() {
        <span class="tok-kw">if let</span> saved = <span class="tok-typ">UserDefaults</span>.standard.<span class="tok-fn">data</span>(forKey: <span class="tok-str">"Items"</span>),
           <span class="tok-kw">let</span> decoded = <span class="tok-kw">try</span>? <span class="tok-typ">JSONDecoder</span>().<span class="tok-fn">decode</span>([<span class="tok-typ">ExpenseItem</span>].<span class="tok-kw">self</span>, from: saved) {
            items = decoded; <span class="tok-kw">return</span>
        }
        items = []
    }
}

<span class="tok-cm">// Colour-coded dot by spend amount</span>
<span class="tok-kw">func</span> <span class="tok-fn">color</span>(for amount: <span class="tok-typ">Double</span>) -&gt; <span class="tok-typ">Color</span> {
    <span class="tok-kw">if</span> amount &lt; <span class="tok-num">100</span>  { <span class="tok-kw">return</span> .yellow }
    <span class="tok-kw">if</span> amount &lt; <span class="tok-num">500</span>  { <span class="tok-kw">return</span> .orange }
    <span class="tok-kw">return</span> .red
}</code></pre>
      </div>

      <img class="cs-img" src="./projects/iexpense/7.png" alt="iExpense list view" style="margin-top:40px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Persistence without a database.</h2>
        <p class="section-text">Wiring <code>UserDefaults</code> through an <code>@Observable</code> class meant the UI always reflects saved state automatically — no manual sync calls, no risk of divergence between memory and disk.</p>
      </div>
    `;

    if (id === 'multiquiz') return `
      <img class="cs-img" src="./projects/multiquiz/8.png" alt="Multiplication Quiz" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Practise times tables with instant feedback.</h2>
        <p class="section-text">An interactive SwiftUI quiz for practising multiplication tables. Users set the table and number of questions, get coloured right/wrong feedback after each answer, then see a final score with a play-again alert.</p>
        <div class="cs-tags">
          <span class="cs-tag">SwiftUI</span>
          <span class="cs-tag">Form</span>
          <span class="cs-tag">State</span>
          <span class="cs-tag">Animation</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">Form &amp; Picker</span><span class="cs-col2-text"><code>Form</code> with <code>Picker</code> (segmented and wheel) for table and question count configuration</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">State Logic</span><span class="cs-col2-text">Multiple <code>@State</code> vars tracking question index, score, feedback, and quiz-active status</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Feedback UX</span><span class="cs-col2-text">Coloured result text with <code>withAnimation</code> + <code>DispatchQueue.asyncAfter</code> for timed auto-advance</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Alert</span><span class="cs-col2-text">End-of-quiz <code>Alert</code> with final score and restart action that resets all state cleanly</span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">ContentView.swift</span></div>
        <pre><code><span class="tok-kw">func</span> <span class="tok-fn">checkAnswer</span>() {
    <span class="tok-kw">guard let</span> answer = <span class="tok-typ">Int</span>(userAnswer) <span class="tok-kw">else</span> { <span class="tok-kw">return</span> }

    <span class="tok-kw">if</span> answer == correctAnswer {
        score += <span class="tok-num">1</span>
        feedbackMessage = <span class="tok-str">"✅ Correct"</span>
        feedbackColor   = .green
    } <span class="tok-kw">else</span> {
        feedbackMessage = <span class="tok-str">"❌ Wrong (Correct: \(correctAnswer))"</span>
        feedbackColor   = .red
    }

    isFirstQuestion = <span class="tok-kw">false</span> <span class="tok-cm">// locks settings pickers mid-quiz</span>

    <span class="tok-fn">withAnimation</span> {
        <span class="tok-typ">DispatchQueue</span>.main.<span class="tok-fn">asyncAfter</span>(deadline: .now() + <span class="tok-num">2</span>) {
            <span class="tok-fn">nextQuestion</span>()
            feedbackMessage = <span class="tok-str">""</span>
            feedbackColor   = .clear
        }
    }
}

<span class="tok-kw">func</span> <span class="tok-fn">nextQuestion</span>() {
    <span class="tok-kw">if</span> currentQuestion &lt; questionNumbers {
        currentQuestion += <span class="tok-num">1</span>
        multiTableWith = <span class="tok-typ">Int</span>.<span class="tok-fn">random</span>(in: <span class="tok-num">2</span>...<span class="tok-num">12</span>)
        userAnswer = <span class="tok-str">""</span>
    } <span class="tok-kw">else</span> {
        showingResults = <span class="tok-kw">true</span>
    }
}</code></pre>
      </div>

      <img class="cs-img" src="./projects/multiquiz/9.png" alt="Quiz question" style="margin-top:40px;" />
      <img class="cs-img" src="./projects/multiquiz/10.png" alt="Quiz result" style="margin-top:16px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Coordinating multiple state variables cleanly.</h2>
        <p class="section-text">Managing question progression, settings lock-out, feedback display, and score tracking across one view was a good exercise in knowing which <code>@State</code> to own where and how to reset consistently.</p>
      </div>
    `;

    if (id === 'bettersleep') return `
      <img class="cs-img" src="./projects/bettersleep/13.png" alt="BetterSleep App" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Your ideal bedtime, calculated by machine learning.</h2>
        <p class="section-text">BetterSleep takes your wake-up time, desired sleep amount, and daily coffee intake, then uses a CoreML model to predict your optimal bedtime — displayed in a clean SwiftUI form.</p>
        <div class="cs-tags">
          <span class="cs-tag">SwiftUI</span>
          <span class="cs-tag">CoreML</span>
          <span class="cs-tag">DatePicker</span>
          <span class="cs-tag">Stepper</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">CoreML</span><span class="cs-col2-text"><code>MLModelConfiguration</code> + <code>SleepCalculator</code> model for on-device bedtime prediction from three inputs</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Date Input</span><span class="cs-col2-text"><code>DatePicker</code> with <code>.hourAndMinute</code> component and <code>Calendar</code> decomposition into seconds offset</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Form Controls</span><span class="cs-col2-text"><code>Stepper</code> for sleep hours (0.25 increments), <code>Picker</code> for coffee cups (1–10)</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Alert Output</span><span class="cs-col2-text">Result and error states both surface through a single <code>Alert</code> driven by shared title/message state</span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">ContentView.swift</span></div>
        <pre><code><span class="tok-kw">func</span> <span class="tok-fn">calculateBedtime</span>() {
    <span class="tok-kw">do</span> {
        <span class="tok-kw">let</span> model = <span class="tok-kw">try</span> <span class="tok-typ">SleepCalculator</span>(configuration: <span class="tok-typ">MLModelConfiguration</span>())

        <span class="tok-cm">// Convert wake-up time to seconds since midnight</span>
        <span class="tok-kw">let</span> components = <span class="tok-typ">Calendar</span>.current.<span class="tok-fn">dateComponents</span>([.hour, .minute], from: wakeUp)
        <span class="tok-kw">let</span> seconds    = (components.hour ?? <span class="tok-num">0</span>) * <span class="tok-num">3_600</span> + (components.minute ?? <span class="tok-num">0</span>) * <span class="tok-num">60</span>

        <span class="tok-kw">let</span> prediction = <span class="tok-kw">try</span> model.<span class="tok-fn">prediction</span>(
            wake:          <span class="tok-typ">Double</span>(seconds),
            estimatedSleep: sleepAmount,
            coffee:        <span class="tok-typ">Double</span>(coffeeAmount)
        )

        <span class="tok-kw">let</span> sleepTime = wakeUp - prediction.actualSleep
        alertTitle   = <span class="tok-str">"Your ideal bed time is…"</span>
        alertMessage = sleepTime.<span class="tok-fn">formatted</span>(date: .omitted, time: .shortened)
    } <span class="tok-kw">catch</span> {
        alertTitle   = <span class="tok-str">"Error"</span>
        alertMessage = <span class="tok-str">"Sorry, something went wrong."</span>
    }
    showingAlert = <span class="tok-kw">true</span>
}</code></pre>
      </div>

      <img class="cs-img" src="./projects/bettersleep/14.png" alt="BetterSleep result" style="margin-top:40px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">On-device ML with three lines of code.</h2>
        <p class="section-text">CoreML's generated Swift interface made calling the model as simple as calling a function — the interesting work was in the input prep (converting times to second offsets) rather than the ML integration itself.</p>
      </div>
    `;

    if (id === 'guessflag') return `
      <img class="cs-img" src="./projects/guessflag/11.png" alt="Guess the Flag" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">A flag quiz with animations and score tracking.</h2>
        <p class="section-text">An interactive SwiftUI game where users identify countries by their flags. The game runs 8 rounds, animates correct answers with a 3D flip, dims wrong choices, and shows a final score alert.</p>
        <div class="cs-tags">
          <span class="cs-tag">SwiftUI</span>
          <span class="cs-tag">Animation</span>
          <span class="cs-tag">ZStack</span>
          <span class="cs-tag">State</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">Animation</span><span class="cs-col2-text"><code>rotation3DEffect</code> on correct flag, <code>.opacity</code> + <code>.scaleEffect</code> on wrong flags, both driven by <code>withAnimation</code></span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Layout</span><span class="cs-col2-text"><code>ZStack</code> layering gradient background, content card with <code>.ultraThinMaterial</code>, and score display</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Game Logic</span><span class="cs-col2-text">Shuffled country array, random correct index, question counter with 8-round limit and delayed final alert</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Alerts</span><span class="cs-col2-text">Two <code>Alert</code> states — mid-game score feedback and end-game restart — triggered by <code>DispatchQueue.asyncAfter</code></span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">ContentView.swift</span></div>
        <pre><code><span class="tok-kw">func</span> <span class="tok-fn">flagTapped</span>(<span class="tok-kw">_</span> number: <span class="tok-typ">Int</span>) {
    selectedFlag = number

    <span class="tok-kw">if</span> number == correctAnswer {
        scoreTitle = <span class="tok-str">"Correct ✅"</span>
        score += <span class="tok-num">1</span>
    } <span class="tok-kw">else</span> {
        scoreTitle = <span class="tok-str">"Wrong ❌ — that's \(countries[number])"</span>
    }

    <span class="tok-cm">// 3D flip on the tapped flag</span>
    <span class="tok-fn">withAnimation</span> { animationAmount += <span class="tok-num">360</span> }

    questionCount += <span class="tok-num">1</span>
    <span class="tok-typ">DispatchQueue</span>.main.<span class="tok-fn">asyncAfter</span>(deadline: .now() + <span class="tok-num">1</span>) {
        <span class="tok-kw">if</span> questionCount == <span class="tok-num">8</span> { finalAlert    = <span class="tok-kw">true</span> }
        <span class="tok-kw">else</span>               { showingScore = <span class="tok-kw">true</span> }
    }
}

<span class="tok-cm">// Per-flag modifiers driven by selectedFlag state</span>
.<span class="tok-fn">opacity</span>(selectedFlag == <span class="tok-kw">nil</span> || selectedFlag == number ? <span class="tok-num">1</span> : <span class="tok-num">0.25</span>)
.<span class="tok-fn">scaleEffect</span>(selectedFlag == <span class="tok-kw">nil</span> || selectedFlag == number ? <span class="tok-num">1</span> : <span class="tok-num">0.85</span>)
.<span class="tok-fn">rotation3DEffect</span>(.degrees(selectedFlag == number ? animationAmount : <span class="tok-num">0</span>),
                  axis: (x: <span class="tok-num">0</span>, y: <span class="tok-num">1</span>, z: <span class="tok-num">0</span>))</code></pre>
      </div>

      <img class="cs-img" src="./projects/guessflag/12.png" alt="Flag game answer" style="margin-top:40px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Animation brings game feedback to life.</h2>
        <p class="section-text">Combining <code>rotation3DEffect</code> with opacity and scale changes on other flags made the interaction feel satisfying without any external animation library — pure SwiftUI modifiers chained together.</p>
      </div>
    `;

    if (id === 'plantcollect') return `
      <img class="cs-img" src="./projects/plantcollect/15.png" alt="Plant Collection App" style="border-radius:16px;margin-top:60px;" />

      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">A plant shop with a cart — built in Flutter.</h2>
        <p class="section-text">A Flutter shopping app featuring a product listing, detailed product page with pot size selection, and a cart — with state shared across the app using Provider. Includes add/remove flows and confirmation dialogs.</p>
        <div class="cs-tags">
          <span class="cs-tag">Flutter</span>
          <span class="cs-tag">Provider</span>
          <span class="cs-tag">BottomNavigationBar</span>
          <span class="cs-tag">SnackBar</span>
        </div>
      </div>

      <div class="cs-section">
        <p class="section-label">Skills Applied</p>
        <h2 class="section-heading">What this project practised.</h2>
        <div class="cs-col2">
          <div class="cs-col2-item"><span class="cs-col2-label">State Management</span><span class="cs-col2-text"><code>Provider</code> with <code>ChangeNotifier</code> for shared cart state — <code>context.watch</code> in cart, <code>context.read</code> for mutations</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Navigation</span><span class="cs-col2-text"><code>IndexedStack</code> + <code>BottomNavigationBar</code> preserving scroll state across home and cart pages</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">Product Detail</span><span class="cs-col2-text">Horizontal <code>ListView.builder</code> for pot size <code>Chip</code> selection, guarded <code>FilledButton</code> for add-to-cart</span></div>
          <div class="cs-col2-item"><span class="cs-col2-label">UX Details</span><span class="cs-col2-text"><code>SnackBar</code> feedback, <code>AlertDialog</code> for delete confirmation, theme seeded from <code>Colors.lightGreen</code></span></div>
        </div>
      </div>

      <div class="cs-code">
        <div class="cs-code-bar"><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-dot"></span><span class="cs-code-filename">cart_provider.dart</span></div>
        <pre><code><span class="tok-kw">class</span> <span class="tok-typ">CartProvider</span> <span class="tok-kw">extends</span> <span class="tok-typ">ChangeNotifier</span> {
  <span class="tok-kw">final</span> <span class="tok-typ">List</span>&lt;<span class="tok-typ">Map</span>&lt;<span class="tok-typ">String</span>, <span class="tok-typ">Object</span>&gt;&gt; _cart = [];
  <span class="tok-typ">List</span>&lt;<span class="tok-typ">Map</span>&lt;<span class="tok-typ">String</span>, <span class="tok-typ">Object</span>&gt;&gt; <span class="tok-kw">get</span> cart =&gt; _cart;

  <span class="tok-kw">void</span> <span class="tok-fn">addProduct</span>(<span class="tok-typ">Map</span>&lt;<span class="tok-typ">String</span>, <span class="tok-typ">Object</span>&gt; product) {
    _cart.<span class="tok-fn">add</span>(product);
    <span class="tok-fn">notifyListeners</span>();
  }

  <span class="tok-kw">void</span> <span class="tok-fn">removeProduct</span>(<span class="tok-typ">Map</span>&lt;<span class="tok-typ">String</span>, <span class="tok-typ">Object</span>&gt; product) {
    _cart.<span class="tok-fn">remove</span>(product);
    <span class="tok-fn">notifyListeners</span>();
  }
}

<span class="tok-cm">// Add to cart — guarded by pot size selection</span>
<span class="tok-kw">void</span> <span class="tok-fn">onTap</span>() {
  <span class="tok-kw">if</span> (selectedSize != <span class="tok-kw">null</span>) {
    <span class="tok-typ">Provider</span>.<span class="tok-fn">of</span>&lt;<span class="tok-typ">CartProvider</span>&gt;(context, listen: <span class="tok-kw">false</span>)
        .<span class="tok-fn">addProduct</span>({ ..., <span class="tok-str">'potSizes'</span>: selectedSize });
    <span class="tok-typ">ScaffoldMessenger</span>.<span class="tok-fn">of</span>(context).<span class="tok-fn">showSnackBar</span>(
      <span class="tok-typ">SnackBar</span>(content: <span class="tok-typ">Text</span>(<span class="tok-str">'Product Added'</span>)),
    );
  }
}</code></pre>
      </div>

      <img class="cs-img" src="./projects/plantcollect/16.png" alt="Plant detail page" style="margin-top:40px;" />
      <img class="cs-img" src="./projects/plantcollect/17.png" alt="Cart page" style="margin-top:16px;" />

      <div class="cs-accent-band">
        <p class="section-label">Takeaway</p>
        <h2 class="section-heading">Provider keeps cart and UI perfectly in sync.</h2>
        <p class="section-text">Lifting cart state into a <code>ChangeNotifierProvider</code> above the widget tree meant any widget could read or mutate the cart without prop-drilling — the UI stayed consistent across navigation with zero manual refresh calls.</p>
      </div>
    `;

    return `
      <div class="cs-img-full">Cover image</div>
      <div class="cs-section">
        <p class="section-label">Overview</p>
        <h2 class="section-heading">Coming soon.</h2>
        <p class="section-text">This case study is in progress.</p>
      </div>
      <div class="cs-accent-band">
        <p class="section-label">Outcome</p>
        <h2 class="section-heading">Results</h2>
        <p class="section-text">Coming soon.</p>
      </div>
    `;
  }
