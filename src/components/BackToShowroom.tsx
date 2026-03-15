import Link from "next/link";

export default function BackToShowroom() {
  return (
    <Link href="/" className="back-badge">
      &larr; View All Templates
    </Link>
  );
}
