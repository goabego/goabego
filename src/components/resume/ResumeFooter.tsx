import heroAbe from "@/assets/hero-abe.jpg";

export function ResumeFooter() {
  return (
    <footer>
      {/* Action buttons for social interactions (like, comment, share, save). */}
      <div className="flex flex-col items-start justify-between gap-4 @sm:flex-row @sm:items-center">
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-heart h-4 w-4"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span>42</span>
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-message-circle h-4 w-4"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
            <span>12</span>
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-share2 lucide-share-2 h-4 w-4"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line
                x1="8.59"
                x2="15.42"
                y1="13.51"
                y2="17.49"
              ></line>
              <line
                x1="15.41"
                x2="8.59"
                y1="6.51"
                y2="10.49"
              ></line>
            </svg>
            <span>Share</span>
          </button>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bookmark h-4 w-4"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
          <span>Save for later</span>
        </button>
      </div>
      {/* Author biography section at the end of the article. */}
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-6">
          <div className="flex flex-col gap-4 @sm:flex-row">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
              <img
                className="aspect-square h-full w-full"
                alt="Author"
                src={heroAbe}
              />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p className="text-muted-foreground mb-2">
                Senior Developer & Tech Writer
              </p>
              <p className="text-sm">
                Jane is a passionate developer with over 8 years of
                experience in web development. She specializes in React,
                TypeScript, and modern web technologies. When she's not
                coding, you can find her writing about the latest trends in
                tech.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs self-start">
              Follow
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
