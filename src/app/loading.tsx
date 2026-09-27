import { Sunbird } from "@/components/brand/Sunbird";

// Between pages: while the next page is on its way, a skeleton of a page opening in the same soft
// material, with the Sunbird pebble and the plumage groove from the first-light preloader.

export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="container-x pt-10 pb-24 md:pt-16">
      <span className="sr-only">Loading the page</span>
      <div aria-hidden="true">
        <div className="flex items-center gap-4">
          <span className="preloader-pebble soft !size-14">
            <Sunbird className="h-7 w-auto text-moss" />
          </span>
          <span className="preloader-track soft-in !w-40">
            <span className="preloader-fill [animation-iteration-count:infinite]" />
          </span>
        </div>
        <div className="mt-8 grid max-w-[42rem] gap-4">
          <span className="skeleton h-12 w-3/4 md:h-16" />
          <span className="skeleton h-4 w-1/2" />
          <span className="skeleton mt-4 h-4 w-full" />
          <span className="skeleton h-4 w-5/6" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <span key={i} className="soft flex flex-col gap-3 p-3" style={{ animationDelay: `${i * 120}ms` }}>
              <span className="skeleton aspect-[4/3] w-full !rounded-[1.2rem]" />
              <span className="skeleton mx-2 h-5 w-2/3" />
              <span className="skeleton mx-2 mb-2 h-4 w-1/2" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
