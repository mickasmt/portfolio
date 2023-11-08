import Image from "next/image";

export function Header() {
  return (
    <div className="mb-5 sm:mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <Image
          className="h-16 w-16 rounded-full overflow-hidden object-cover"
          src="/avatar.png"
          alt="avatar"
          width={100}
          height={100}
        />

        <div>
          <h1 className="text-3xl font-bold">mickasmt</h1>
          <p className="text-muted-foreground">Open Source Designer</p>
        </div>
      </div>
    </div>

  )
}
