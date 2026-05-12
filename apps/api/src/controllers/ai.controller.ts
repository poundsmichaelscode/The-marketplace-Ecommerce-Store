import type { Request, Response } from "express";
import { ok } from "../utils/apiResponse.js";
import {
  chatShoppingAssistant,
  fraudSignals,
  generateProductDescription,
  semanticSearch,
  summarizeReviews,
} from "../services/ai.service.js";

export async function aiChat(req: Request, res: Response) {
  return ok(
    res,
    await chatShoppingAssistant(
      req.body.message,
      JSON.stringify(req.user || {})
    ),
    "AI reply generated"
  );
}

export async function aiProductDescription(req: Request, res: Response) {
  return ok(
    res,
    await generateProductDescription(req.body),
    "Description generated"
  );
}

export async function aiSearch(req: Request, res: Response) {
  return ok(
    res,
    await semanticSearch(String(req.query.q || "")),
    "AI search results"
  );
}

export async function aiReviewSummary(req: Request, res: Response) {
  const productId = Array.isArray(req.params.productId)
    ? req.params.productId[0]
    : req.params.productId;

  return ok(
    res,
    await summarizeReviews(String(productId)),
    "Review summary generated"
  );
}

export async function aiFraud(req: Request, res: Response) {
  return ok(res, await fraudSignals(req.body), "Fraud signals generated");
}