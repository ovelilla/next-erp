import { Artist as PrismaArtist } from "@prisma/client";

type Artist = Omit<PrismaArtist, "createdAt" | "updatedAt">;

type ArtistsProps = {
  initialData: Artist[];
};

export type { Artist, ArtistsProps };
