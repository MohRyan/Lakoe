-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Buyer', 'Seller');

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Cards" (
    "Id" TEXT NOT NULL,
    "prices" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "userId" TEXT,
    "storesId" TEXT,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "CardItems" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "attachments" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "cardsId" TEXT NOT NULL,
    "userId" TEXT,
    "storeId" TEXT,

    CONSTRAINT "CardItems_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Invoices" (
    "Id" TEXT NOT NULL,
    "prices" DOUBLE PRECISION NOT NULL,
    "serviceCharge" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "receiverLongitude" DECIMAL(65,30) NOT NULL,
    "receiverLatitude" DECIMAL(65,30) NOT NULL,
    "receiverDistrict" TEXT NOT NULL,
    "receiverPhone" TEXT NOT NULL,
    "receiverAddress" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "cardsId" TEXT NOT NULL,
    "confirmationPaymentId" TEXT,
    "paymentId" TEXT,
    "courierId" TEXT,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "InvoicesHistories" (
    "Id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "invoiceId" TEXT NOT NULL,

    CONSTRAINT "InvoicesHistories_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "Id" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "midtransTransactionId" TEXT NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "ConfirmationPayment" (
    "Id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "bank" TEXT NOT NULL,

    CONSTRAINT "ConfirmationPayment_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Stores" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slogan" TEXT,
    "description" TEXT,
    "domain" TEXT,
    "logoAttachment" TEXT,
    "bannerAttachment" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Stores_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "VirtualBankAccounts" (
    "Id" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "storesId" TEXT,

    CONSTRAINT "VirtualBankAccounts_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "StoresOnDecorations" (
    "Id" TEXT NOT NULL,
    "decorationId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,

    CONSTRAINT "StoresOnDecorations_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Decoration" (
    "Id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Decoration_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "OperationHours" (
    "Id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "openAt" TIMESTAMP(3) NOT NULL,
    "closeAt" TIMESTAMP(3) NOT NULL,
    "isOff" BOOLEAN NOT NULL,
    "storeId" TEXT NOT NULL,

    CONSTRAINT "OperationHours_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "MessageTemplates" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "storesId" TEXT,

    CONSTRAINT "MessageTemplates_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Products" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "urlName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "attachments" TEXT[],
    "stock" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "minimumOrder" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "storeId" TEXT,
    "categoriesId" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Variants" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Variants_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "VariantOptions" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "variantId" TEXT NOT NULL,

    CONSTRAINT "VariantOptions_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "VariantOptionsValue" (
    "Id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "optionId" TEXT NOT NULL,

    CONSTRAINT "VariantOptionsValue_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Couriers" (
    "Id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "courierCode" TEXT NOT NULL,
    "courierServiceName" TEXT NOT NULL,
    "courierServiceCode" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "courierId" TEXT,

    CONSTRAINT "Couriers_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Locations" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "isMainLocation" BOOLEAN NOT NULL,
    "storesId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cards_userId_key" ON "Cards"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_cardsId_key" ON "Invoices"("cardsId");

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_paymentId_key" ON "Invoices"("paymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_courierId_key" ON "Invoices"("courierId");

-- CreateIndex
CREATE UNIQUE INDEX "InvoicesHistories_invoiceId_key" ON "InvoicesHistories"("invoiceId");

-- CreateIndex
CREATE UNIQUE INDEX "Stores_userId_key" ON "Stores"("userId");

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardItems" ADD CONSTRAINT "CardItems_cardsId_fkey" FOREIGN KEY ("cardsId") REFERENCES "Cards"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardItems" ADD CONSTRAINT "CardItems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardItems" ADD CONSTRAINT "CardItems_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_cardsId_fkey" FOREIGN KEY ("cardsId") REFERENCES "Cards"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_confirmationPaymentId_fkey" FOREIGN KEY ("confirmationPaymentId") REFERENCES "ConfirmationPayment"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payments"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Couriers"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoicesHistories" ADD CONSTRAINT "InvoicesHistories_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoices"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stores" ADD CONSTRAINT "Stores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VirtualBankAccounts" ADD CONSTRAINT "VirtualBankAccounts_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoresOnDecorations" ADD CONSTRAINT "StoresOnDecorations_decorationId_fkey" FOREIGN KEY ("decorationId") REFERENCES "Decoration"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoresOnDecorations" ADD CONSTRAINT "StoresOnDecorations_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperationHours" ADD CONSTRAINT "OperationHours_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTemplates" ADD CONSTRAINT "MessageTemplates_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Categories"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variants" ADD CONSTRAINT "Variants_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOptions" ADD CONSTRAINT "VariantOptions_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variants"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOptionsValue" ADD CONSTRAINT "VariantOptionsValue_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "VariantOptions"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locations" ADD CONSTRAINT "Locations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
