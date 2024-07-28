import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center gap-4 py-4">
      <Link href="/">
        <Image
          className="size-16 shrink-0 overflow-hidden rounded-full object-cover"
          src="/avatar.png"
          alt="avatar"
          width={100}
          height={100}
        />
      </Link>

      <div>
        <h1 className="text-3xl font-bold">mickasmt</h1>
        <p className="text-lg font-medium text-muted-foreground">
          Software Engineer
        </p>
      </div>
    </div>
  );
}
