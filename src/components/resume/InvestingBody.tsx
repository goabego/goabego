import heroAbe from "@/assets/hero-abe.jpg";

export function InvestingBody() {
  return (
    <>
      {/* Featured image for the article. */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          alt="Featured image"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="object-cover"
          src={heroAbe}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
      </div>
      {/* Main content of the article with prose styling. */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1>Investing</h1>
        <p className="text-lg leading-relaxed">
          This is the investing section. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="mt-8 mb-4 text-2xl font-bold">
          The Evolution of Modern Frameworks
        </h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        {/* Blockquote for highlighting key phrases or quotes. */}
        <blockquote className="border-primary my-6 border-l-4 pl-6 text-lg italic">
          "The best way to predict the future is to create it. In web
          development, we're not just following trends—we're setting them."
        </blockquote>
        <h3 className="mt-6 mb-3 text-xl font-semibold">
          Key Technologies Shaping the Future
        </h3>
        <ul className="my-4 space-y-2">
          <li>Artificial Intelligence and Machine Learning integration</li>
          <li>Edge computing and serverless architectures</li>
          <li>Progressive Web Applications (PWAs)</li>
          <li>WebAssembly for high-performance applications</li>
          <li>Advanced CSS features and container queries</li>
        </ul>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        {/* "Pro Tip" callout box. */}
        <div className="my-8">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6">
              <h4 className="mb-2 font-semibold">💡 Pro Tip</h4>
              <p className="text-muted-foreground text-sm">
                Always stay updated with the latest web standards and best
                practices. The web development landscape evolves rapidly, and
                continuous learning is key to staying relevant.
              </p>
            </div>
          </div>
        </div>
        <h2 className="mt-8 mb-4 text-2xl font-bold">Looking Ahead</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit asatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </div>
    </>
  );
}
