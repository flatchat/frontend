import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#2029BA]">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            FlatChat
          </h1>
          <p className="text-2xl text-white">
            The SuperApp for Friends and Flatmates
          </p>
        </div>

        {/* App Store and Google Play icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/play-store.png"
              alt="Get it on Google Play"
              className="h-full w-auto"
              width={100}
              height={100}
            />
          </Link>
          <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/app-store.svg"
              alt="Download on the App Store"
              className="h-full w-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-0 w-full py-4 text-white text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/delete-account" className="hover:underline">
              Delete Account
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
