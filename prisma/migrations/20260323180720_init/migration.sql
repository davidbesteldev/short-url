-- CreateTable
CREATE TABLE "short_urls" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "short_code" TEXT NOT NULL,
    "access_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "short_urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "short_urls_short_code_key" ON "short_urls"("short_code");

-- CreateIndex
CREATE INDEX "short_urls_short_code_idx" ON "short_urls"("short_code");
