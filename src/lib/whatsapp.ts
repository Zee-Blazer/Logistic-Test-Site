import { businessConfig } from "@/data/business";

/**
 * Generates a standard WhatsApp click-to-chat URL.
 * https://wa.me/<number>?text=<encoded_text>
 */
export function getWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = (customPhone || businessConfig.phoneRaw).replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

export interface ProductOrderParams {
  productName: string;
  priceFormatted: string;
  sku?: string;
  category?: string;
  lengthOrTexture?: string;
  productUrl?: string;
}

/**
 * Creates a structured inquiry for ordering a hair product.
 */
export function buildProductWhatsAppUrl(params: ProductOrderParams): string {
  const parts = [
    `Hello ${businessConfig.name},`,
    `I am interested in purchasing this product:`,
    `• Product: ${params.productName}`,
    `• Price: ${params.priceFormatted}`,
  ];

  if (params.lengthOrTexture) {
    parts.push(`• Specification: ${params.lengthOrTexture}`);
  }

  if (params.sku) {
    parts.push(`• Ref ID: #${params.sku}`);
  }

  if (params.productUrl) {
    parts.push(`• Link: ${params.productUrl}`);
  }

  parts.push(
    ``,
    `Please confirm current availability, delivery timeline, and payment instructions. Thank you!`
  );

  return getWhatsAppUrl(parts.join("\n"));
}

export interface AppointmentBookingParams {
  serviceName: string;
  priceFormatted?: string;
  customerName?: string;
  preferredDate?: string;
  preferredTime?: string;
  locationType?: "Salon Studio (VI)" | "Home / Hotel Service" | string;
  notes?: string;
}

/**
 * Creates a structured inquiry for requesting a salon service appointment.
 */
export function buildAppointmentWhatsAppUrl(params: AppointmentBookingParams): string {
  const parts = [
    `Hello ${businessConfig.name},`,
    `I would like to request an appointment for:`,
    `• Service: ${params.serviceName}`,
  ];

  if (params.priceFormatted) {
    parts.push(`• Estimated Price: ${params.priceFormatted}`);
  }

  if (params.customerName) {
    parts.push(`• Client Name: ${params.customerName}`);
  }

  if (params.preferredDate) {
    parts.push(`• Preferred Date: ${params.preferredDate}`);
  }

  if (params.preferredTime) {
    parts.push(`• Preferred Time: ${params.preferredTime}`);
  }

  if (params.locationType) {
    parts.push(`• Appointment Location: ${params.locationType}`);
  }

  if (params.notes && params.notes.trim()) {
    parts.push(`• Additional Notes: ${params.notes.trim()}`);
  }

  parts.push(
    ``,
    `Please let me know if this slot is open or advise on the closest available schedule. Thank you!`
  );

  return getWhatsAppUrl(parts.join("\n"));
}

/**
 * Creates a general concierge or inquiry WhatsApp URL.
 */
export function buildConciergeWhatsAppUrl(topic?: string): string {
  const topicText = topic ? ` regarding ${topic}` : "";
  const message = `Hello ${businessConfig.name}, I would like to speak with a concierge consultant${topicText}. Please assist me with product recommendations and delivery inquiries.`;
  return getWhatsAppUrl(message);
}
