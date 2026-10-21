/* Whitepaper content updated from the supplied October 2026 source. Existing UI classes/layout are preserved. */
import type { JSX, ReactNode } from "react";

type SectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

function Section({ id, number, title, children }: SectionProps): JSX.Element {
  return (
    <section id={id}>
      <div className="wpsh">
        <span className="wpn">{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Wp(): JSX.Element {
  return (
    <div id="wp" aria-label="T3Kit ecosystem whitepaper">
      <header className="wphero">
        <div className="wpw">
          <a className="wpback" href="#top">← Back to T3Kit</a>
          <span className="wptag">Ecosystem whitepaper</span>
          <h1>
            Building the Infrastructure, Products, and Community for the Next Generation of <em>Web3.</em>
          </h1>
          <p className="wpabs">
            T3Kit is a multi-layer Web3 ecosystem connecting products, infrastructure, and community to help people learn, build, participate, and grow in the digital economy.
          </p>
          <div className="wpmeta">
            <span><b>Version</b> 1.0</span>
            <span><b>Date</b> October 2026</span>
            <span><b>Token network</b> BNB Smart Chain</span>
          </div>
        </div>
      </header>

      <div className="wpnav" role="navigation" aria-label="Whitepaper sections">
        <div className="wpin">
          <a href="#wp-abstract">Abstract</a>
          <a href="#wp-problem">The Problem</a>
          <a href="#wp-ecosystem">The Ecosystem</a>
          <a href="#wp-token">$KIT Token</a>
          <a href="#wp-economics">Economics</a>
          <a href="#wp-roadmap">Roadmap</a>
          <a href="#wp-disclaimer">Disclaimer</a>
        </div>
        <div className="wpbar" />
      </div>

      <div className="wpw">
        <Section id="wp-abstract" number="01" title="Abstract">
          <p className="wplede">
            Web3 presents new opportunities across education, technology, digital ownership, gaming, and financial markets. However, accessing these opportunities remains difficult for many people due to fragmented platforms, limited practical experience, complex tools, and disconnected communities.
          </p>
          <p>
            T3Kit is a multi-layer Web3 ecosystem designed to address these challenges by bringing together products, infrastructure, and community that help people learn, build, participate, and grow in the digital economy.
          </p>
          <p>
            Rather than concentrating on a single use case, T3Kit develops interconnected products serving different needs within Web3. These include learning and career development, crypto trading infrastructure, gaming and interactive experiences, and other opportunities for participation in the ecosystem.
          </p>
          <p>
            At the centre of this vision is a connected ecosystem in which users, developers, creators, and businesses can access useful products, develop practical skills, and create value.
          </p>
          <p><b>T3Kit&apos;s mission is to make meaningful participation in Web3 more accessible, practical, and rewarding.</b></p>
        </Section>

        <Section id="wp-problem" number="02" title="The Problem">
          <p className="wplede">Despite the growth of Web3, several challenges continue to limit participation and long-term adoption.</p>
          <ul className="wpck">
            <li><b>Fragmented experiences:</b> Learning, trading, gaming, and building often happen across separate platforms, making it difficult for users to navigate the ecosystem.</li>
            <li><b>The knowledge-to-practice gap:</b> Many people acquire theoretical knowledge but struggle to translate it into practical skills, products, and career opportunities.</li>
            <li><b>Complexity and accessibility:</b> Newcomers frequently encounter technical barriers, unfamiliar tools, and steep learning curves when entering Web3.</li>
            <li><b>Limited pathways for contribution:</b> Developers, creators, and community members need more accessible ways to develop products, reach users, and participate in the value they help create.</li>
            <li><b>Disconnected communities and opportunities:</b> Valuable knowledge, products, and opportunities are often scattered across different networks and communities.</li>
          </ul>
          <p>Addressing these challenges requires more than another standalone application. It requires an ecosystem that connects useful products with the people who need them.</p>
        </Section>

        <Section id="wp-solution" number="03" title="The T3Kit Solution">
          <p className="wplede">T3Kit is building a multi-layer Web3 ecosystem that combines independent products under a shared vision.</p>
          <p>Each product serves a distinct purpose while contributing to the broader ecosystem. The approach is built around five principles:</p>
          <div className="wpg2">
            <div className="wpc"><b>Accessibility</b><p>Reduce unnecessary barriers to entering and participating in Web3.</p></div>
            <div className="wpc"><b>Practical utility</b><p>Build products that solve real problems rather than depend solely on speculation.</p></div>
            <div className="wpc"><b>Interconnection</b><p>Create opportunities for products and communities to complement one another.</p></div>
            <div className="wpc"><b>Contribution</b><p>Encourage users, developers, creators, and partners to participate in ecosystem growth.</p></div>
            <div className="wpc"><b>Sustainable development</b><p>Prioritise useful products, adoption, and long-term value creation.</p></div>
          </div>
          <p>T3Kit&apos;s model is designed to evolve as new needs emerge, allowing the ecosystem to expand beyond its initial products without losing its central purpose.</p>
        </Section>

        <Section id="wp-ecosystem" number="04" title="The Ecosystem">
          <p className="wplede">T3Kit&apos;s ecosystem consists of specialised products, shared infrastructure, and a growing community.</p>
          <div className="wpg2">
            <div className="wpc">
              <b>4.1 KitLab — Learning and Career Development</b>
              <p>KitLab focuses on helping people acquire practical Web3 knowledge, develop relevant skills, and pursue opportunities within the digital economy.</p>
              <p>Its direction extends beyond conventional online learning towards practical engagement, skill development, and pathways for users to grow into contributors and builders.</p>
              <p>The long-term vision is to connect learning with practical application, helping users move from understanding Web3 to participating meaningfully in it.</p>
            </div>
            <div className="wpc">
              <b>4.2 KitSetups — Crypto Trading Infrastructure</b>
              <p>KitSetups is developing an AI-native approach to modern crypto trading.</p>
              <p>Its product direction includes market analysis, trading setups, market-data monitoring, and tools designed to help traders understand market conditions and identify potential opportunities.</p>
              <p>The objective is to make trading tools and market information more accessible while supporting more informed decision-making.</p>
              <p>KitSetups provides analytical support; users remain responsible for their own trading decisions and risk management.</p>
            </div>
            <div className="wpc">
              <b>4.3 KitArcade — Gaming and Interactive Experiences</b>
              <p>KitArcade focuses on gaming, interactive digital experiences, and opportunities for participation through games.</p>
              <p>By combining accessible gaming experiences with a broader Web3 ecosystem, KitArcade creates another entry point for users to engage with digital products and communities.</p>
              <p>Its longer-term direction includes opportunities for developers and creators to publish games and reach an expanding audience.</p>
            </div>
            <div className="wpc">
              <b>4.4 Future Products and Infrastructure</b>
              <p>T3Kit is designed to accommodate additional products and services as the ecosystem develops.</p>
              <p>Future expansion may include new digital services, developer infrastructure, real-world utility, and opportunities that connect users, creators, businesses, and communities.</p>
              <p>New initiatives will be developed according to ecosystem needs, available resources, and execution priorities.</p>
              <p>The ecosystem&apos;s architecture is intended to remain flexible, allowing individual products to develop independently while contributing to the wider T3Kit vision.</p>
            </div>
          </div>
        </Section>

        <Section id="wp-token" number="05" title="The $KIT Token">
          <p className="wplede">$KIT is the proposed native utility token of the T3Kit ecosystem.</p>
          <p>Its purpose is to support transactions, access to selected services, and participation across products as the ecosystem&apos;s token utility is implemented. The token is intended to have a practical role within the ecosystem rather than being positioned solely as a speculative asset.</p>
          <h3>5.1 Intended Utility</h3>
          <ul className="wpck">
            <li><b>Product payments:</b> $KIT is intended to support eligible payments and purchases across participating T3Kit products.</li>
            <li><b>Premium access:</b> Planned use cases include premium subscriptions on KitSetups and premium learning or career-development offerings on KitLab.</li>
            <li><b>Gaming and publishing:</b> Future KitArcade integrations may allow developers and creators to use $KIT for eligible publishing services and other supported activities.</li>
            <li><b>Education and physical infrastructure:</b> As T3Kit expands its real-world presence, planned use cases may include eligible educational services, tuition, and activities at a future T3Kit physical hub.</li>
            <li><b>Ecosystem participation:</b> Subject to implementation, $KIT may support community initiatives, contribution programmes, and selected ecosystem incentives.</li>
          </ul>
          <p>These utilities represent the token&apos;s intended direction. Individual use cases will become available only when the relevant products, contracts, and integrations are implemented.</p>
          <h3>5.2 Token Network and Supply</h3>
          <div className="wptbl">
            <table>
              <tbody>
                <tr><th>Parameter</th><th>Proposed specification</th></tr>
                <tr><td>Token</td><td>$KIT</td></tr>
                <tr><td>Blockchain</td><td>BNB Smart Chain</td></tr>
                <tr><td>Token standard</td><td>BEP-20</td></tr>
                <tr><td>Proposed total supply</td><td>1,000,000,000 KIT</td></tr>
                <tr><td>Supply model</td><td>Fixed supply, with no minting or burning functions under the proposed design.</td></tr>
                <tr><td>Token generation event (TGE)</td><td>To be announced.</td></tr>
                <tr><td>Exchange listings</td><td>To be announced.</td></tr>
              </tbody>
            </table>
          </div>
          <p>The final deployed contract and its verified implementation will determine the token&apos;s enforceable technical properties.</p>
          <h3>5.3 Proposed Token Allocation</h3>
          <p>The proposed allocation of the total supply is as follows:</p>
          <div className="wptbl">
            <table>
              <thead><tr><th>Allocation</th><th>Percentage</th></tr></thead>
              <tbody>
                <tr><td>Ecosystem Development</td><td>30%</td></tr>
                <tr><td>Team</td><td>15%</td></tr>
                <tr><td>Strategic Allocation</td><td>12%</td></tr>
                <tr><td>Public Sale</td><td>8%</td></tr>
                <tr><td>Treasury</td><td>10%</td></tr>
                <tr><td>Liquidity</td><td>10%</td></tr>
                <tr><td>Marketing</td><td>10%</td></tr>
                <tr><td>Advisors</td><td>5%</td></tr>
                <tr><td><b>Total</b></td><td><b>100%</b></td></tr>
              </tbody>
            </table>
          </div>
          <p>These percentages describe the proposed allocation model. Vesting schedules, lock-up periods, wallet disclosures, and detailed release schedules will be published when finalised.</p>
          <h3>5.4 Token Value and Responsibility</h3>
          <p>The intended value of $KIT comes from its potential utility within the T3Kit ecosystem.</p>
          <p>However, utility does not guarantee market demand, price appreciation, liquidity, or financial returns. The extent of its usefulness will depend on product adoption, implementation, ecosystem activity, and other market factors.</p>
          <p>$KIT should not be interpreted as a promise of profit or guaranteed returns.</p>
        </Section>

        <Section id="wp-economics" number="06" title="Ecosystem Economics">
          <p className="wplede">T3Kit aims to develop a sustainable ecosystem in which useful products can support continued development.</p>
          <p>Potential sources of commercial activity include premium subscriptions, educational services, product access, developer services, and other offerings introduced as the ecosystem expands.</p>
          <p>Where implemented, $KIT may facilitate eligible payments and other product-specific transactions.</p>
          <p>The long-term objective is to connect product utility with ecosystem participation, creating opportunities for users, developers, and partners to contribute to a growing network.</p>
          <p>Sustainability will depend on genuine demand for products and services, responsible financial management, and consistent execution.</p>
          <p>Token incentives, where introduced, will complement product utility rather than replace the need for useful products and sustainable business activity.</p>
        </Section>

        <Section id="wp-technology" number="07" title="Technology and Security">
          <p className="wplede">T3Kit&apos;s technology direction prioritises practical utility, reliability, and the ability to support multiple products.</p>
          <p>The ecosystem may incorporate blockchain-based transactions, smart contracts, AI-assisted tools, and other technologies where they provide clear benefits.</p>
          <p>Not every product requires every technology. Individual products will adopt the infrastructure appropriate to their functions.</p>
          <h3>Security considerations</h3>
          <ul className="wpck">
            <li>Responsible smart-contract development.</li>
            <li>Protection of user information.</li>
            <li>Secure handling of digital assets.</li>
            <li>Transparent communication about product limitations.</li>
          </ul>
          <p>The proposed $KIT contract will be published for public verification when deployed. Any security audits, independent assessments, or other formal security reviews will be disclosed when completed.</p>
          <p>Users should independently assess the risks associated with digital assets and any product they choose to use.</p>
        </Section>

        <Section id="wp-roadmap" number="08" title="Roadmap and Development Direction">
          <p className="wplede">T3Kit&apos;s development is guided by an evolving roadmap rather than fixed promises that may not reflect actual execution.</p>
          <div className="wpflow">
            <div><i>1</i><b>Phase 1 — Ecosystem Foundation</b><span>Establish the T3Kit identity, develop the initial product portfolio, and build the community supporting the ecosystem.</span></div>
            <div><i>2</i><b>Phase 2 — Product Development and Adoption</b><span>Improve existing products, strengthen their individual value propositions, and expand user adoption and engagement.</span></div>
            <div><i>3</i><b>Phase 3 — Ecosystem Integration</b><span>Develop practical connections between products, expand supported use cases, and introduce utility that strengthens the relationship between ecosystem activity and $KIT.</span></div>
            <div><i>4</i><b>Phase 4 — Ecosystem Expansion</b><span>Explore additional products, infrastructure, partnerships, developer opportunities, and real-world applications as the ecosystem matures.</span></div>
          </div>
          <p>These phases describe strategic priorities, not guaranteed delivery dates. Specific milestones, launches, and token-related events will be communicated through official T3Kit channels.</p>
        </Section>

        <Section id="wp-community" number="09" title="Community and Governance">
          <p className="wplede">Community participation is an important part of T3Kit&apos;s development.</p>
          <p>Users, developers, creators, educators, and partners can contribute through product feedback, content, development, community initiatives, and other activities that support ecosystem growth.</p>
          <p>T3Kit aims to create more opportunities for meaningful contribution as its products and infrastructure evolve.</p>
          <p>Any future governance mechanisms, voting rights, or formal community decision-making processes will be defined and communicated separately when implemented.</p>
          <p>Holding $KIT should not be assumed to confer governance rights unless expressly established by the applicable mechanism.</p>
        </Section>

        <Section id="wp-vision" number="10" title="Vision">
          <p className="wplede">T3Kit is being built around a simple idea: the next generation of Web3 participants should have more accessible ways to learn, build, explore, and create value.</p>
          <p>By developing specialised products under one ecosystem, T3Kit seeks to connect different parts of the digital economy without forcing every use case into a single application.</p>
          <p>The ambition extends beyond individual products. It is to build an ecosystem in which people can discover opportunities, develop practical capabilities, access useful infrastructure, and contribute to the products and communities shaping Web3.</p>
          <p>The journey will be measured by the usefulness of the products, the strength of the community, the quality of execution, and the ecosystem&apos;s ability to create sustainable value over time.</p>
          <p><b>T3Kit is building the products, infrastructure, and community that bring the next generation into Web3, wherever they start.</b></p>
        </Section>

        <Section id="wp-disclaimer" number="11" title="Disclaimer">
          <p className="wplede">This whitepaper describes the vision, proposed structure, and development direction of T3Kit as of October 2026.</p>
          <p>Certain products, integrations, token utilities, and roadmap items may be under development, planned, or subject to change. Their inclusion does not constitute a guarantee of delivery.</p>
          <p>The information in this document is provided for general informational purposes and does not constitute financial, investment, legal, or tax advice, nor an offer or solicitation to purchase digital assets.</p>
          <p>Digital assets involve significant risks, including volatility, loss of capital, technical vulnerabilities, regulatory uncertainty, and limited liquidity. Readers should conduct their own research and seek independent professional advice where appropriate.</p>
          <p>All token specifications, allocations, schedules, and utilities remain subject to final implementation and official announcements.</p>
          <p>For verified updates, readers should consult T3Kit&apos;s official communication channels.</p>
        </Section>

        <div className="wpend">
          <a href="#top">Return to the main site</a>
          <br />
          Informational document. Not financial, investment, legal, or tax advice.
        </div>
      </div>
    </div>
  );
}
