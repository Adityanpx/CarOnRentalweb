
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-12 md:py-16 border-t">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-2">
            <Link href="#">
              <span className="text-2xl font-bold" >Rental Car Application</span>
              </Link>
          </div>
          <p className="text-muted-foreground">Rent the perfect car for your next adventure.</p>
        </div>
        <div className="grid gap-4">
          <h3 className="font-semibold">Explore</h3>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Locations
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Vehicles
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Deals
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Reviews
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="font-semibold">Support</h3>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            FAQ
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Contact Us
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Policies
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Accessibility
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="font-semibold">Company</h3>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Careers
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Press
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Investors
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="font-semibold">Connect</h3>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Facebook
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Twitter
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Instagram
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
