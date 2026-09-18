-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'SPAM');

-- CreateEnum
CREATE TYPE "WorkStatus" AS ENUM ('NOMINATED', 'ACCREDITED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "RecognitionTier" AS ENUM ('Category Winner', 'Editor''s Selection', 'Featured', 'Honorable Mention');

-- CreateEnum
CREATE TYPE "MediaAspectRatio" AS ENUM ('landscape', 'portrait', 'square', 'tall');

-- CreateEnum
CREATE TYPE "GridSpan" AS ENUM ('large', 'medium', 'small', 'tall');

-- CreateEnum
CREATE TYPE "SubmitterRole" AS ENUM ('creator', 'studio_rep', 'client', 'peer');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'curator', 'creator');

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(50) NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "index_number" SMALLINT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'creator',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "creators" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "slug" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "role" VARCHAR(100) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "initials" VARCHAR(4) NOT NULL,
    "bio" TEXT NOT NULL,
    "website" VARCHAR(255),
    "instagram_handle" VARCHAR(50),
    "twitter_handle" VARCHAR(50),
    "claimed" BOOLEAN NOT NULL DEFAULT false,
    "claimed_by_user_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "creators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submissions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tracking_code" VARCHAR(32) NOT NULL,
    "submitter_name" VARCHAR(100) NOT NULL,
    "submitter_email" VARCHAR(255) NOT NULL,
    "submitter_role" "SubmitterRole" NOT NULL,
    "project_title" VARCHAR(150) NOT NULL,
    "creator_name" VARCHAR(100) NOT NULL,
    "creator_website" VARCHAR(255),
    "project_url" VARCHAR(500) NOT NULL,
    "category_id" UUID NOT NULL,
    "location_hub" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "temp_asset_urls" JSONB NOT NULL DEFAULT '[]',
    "status" "SubmissionStatus" NOT NULL DEFAULT 'PENDING',
    "curator_notes" TEXT,
    "reviewed_by_user_id" UUID,
    "reviewed_at" TIMESTAMPTZ,
    "ip_hash" VARCHAR(64) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "works" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" VARCHAR(150) NOT NULL,
    "slug" VARCHAR(160) NOT NULL,
    "creator_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,
    "submission_id" UUID,
    "location" VARCHAR(100) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "summary" VARCHAR(500) NOT NULL,
    "description" TEXT NOT NULL,
    "client_or_context" VARCHAR(150),
    "year" CHAR(4) NOT NULL,
    "aspect_ratio" "MediaAspectRatio" NOT NULL DEFAULT 'landscape',
    "span" "GridSpan" NOT NULL DEFAULT 'medium',
    "status" "WorkStatus" NOT NULL DEFAULT 'NOMINATED',
    "recognition_tier" "RecognitionTier",
    "score" DECIMAL(4,2),
    "appreciation_count" INTEGER NOT NULL DEFAULT 0,
    "published_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accredited_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "works_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_media" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "work_id" UUID NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "aspect_ratio" "MediaAspectRatio" NOT NULL DEFAULT 'landscape',
    "caption" VARCHAR(255),
    "alt_text" VARCHAR(255) NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "display_order" SMALLINT NOT NULL DEFAULT 0,
    "width" INTEGER,
    "height" INTEGER,
    "blur_data_url" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_tags" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "work_id" UUID NOT NULL,
    "tag" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_appreciations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "work_id" UUID NOT NULL,
    "ip_hash" VARCHAR(64) NOT NULL,
    "user_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_appreciations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");
CREATE UNIQUE INDEX "categories_index_number_key" ON "categories"("index_number");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "creators_slug_key" ON "creators"("slug");
CREATE INDEX "creators_city_idx" ON "creators"("city");

-- CreateIndex
CREATE UNIQUE INDEX "submissions_tracking_code_key" ON "submissions"("tracking_code");
CREATE INDEX "submissions_status_idx" ON "submissions"("status");
CREATE INDEX "submissions_submitter_email_idx" ON "submissions"("submitter_email");

-- CreateIndex
CREATE UNIQUE INDEX "works_slug_key" ON "works"("slug");
CREATE UNIQUE INDEX "works_submission_id_key" ON "works"("submission_id");
CREATE INDEX "works_status_published_at_idx" ON "works"("status", "published_at" DESC);
CREATE INDEX "works_creator_id_idx" ON "works"("creator_id");
CREATE INDEX "works_category_id_idx" ON "works"("category_id");
CREATE INDEX "works_recognition_tier_idx" ON "works"("recognition_tier");
CREATE INDEX "works_city_idx" ON "works"("city");
CREATE INDEX "works_appreciation_count_idx" ON "works"("appreciation_count" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "work_media_work_id_display_order_key" ON "work_media"("work_id", "display_order");
CREATE INDEX "work_media_work_id_idx" ON "work_media"("work_id");

-- CreateIndex (Partial unique index for strictly one primary image per work)
CREATE UNIQUE INDEX "uq_work_media_single_primary" ON "work_media"("work_id") WHERE "is_primary" = TRUE;

-- CreateIndex
CREATE UNIQUE INDEX "work_tags_work_id_tag_key" ON "work_tags"("work_id", "tag");
CREATE INDEX "work_tags_tag_idx" ON "work_tags"("tag");
CREATE INDEX "work_tags_work_id_idx" ON "work_tags"("work_id");

-- CreateIndex
CREATE UNIQUE INDEX "work_appreciations_work_id_ip_hash_key" ON "work_appreciations"("work_id", "ip_hash");
CREATE INDEX "work_appreciations_work_id_idx" ON "work_appreciations"("work_id");

-- AddForeignKey
ALTER TABLE "creators" ADD CONSTRAINT "creators_claimed_by_user_id_fkey" FOREIGN KEY ("claimed_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_reviewed_by_user_id_fkey" FOREIGN KEY ("reviewed_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "creators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_media" ADD CONSTRAINT "work_media_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_tags" ADD CONSTRAINT "work_tags_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_appreciations" ADD CONSTRAINT "work_appreciations_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "works"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_appreciations" ADD CONSTRAINT "work_appreciations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Critical Business Integrity CHECK Constraint:
-- Nominated works must NOT have recognition_tier or score or accredited_at.
-- Accredited works MUST have recognition_tier, score, and accredited_at.
ALTER TABLE "works" ADD CONSTRAINT "chk_works_status_rules" CHECK (
    ("status" = 'NOMINATED' AND "recognition_tier" IS NULL AND "score" IS NULL AND "accredited_at" IS NULL) OR
    ("status" = 'ACCREDITED' AND "recognition_tier" IS NOT NULL AND "score" IS NOT NULL AND "accredited_at" IS NOT NULL) OR
    ("status" = 'ARCHIVED')
);

