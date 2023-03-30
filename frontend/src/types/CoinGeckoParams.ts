export type CoinGeckoParams = {
    vs_currency: "usd" | "eur", // will need to add more supported currencies
    order: "" | "market_cap_asc" | "market_cap_desc" | "volume_asc" | "volume_desc" | "id_asc" | "id_desc",
    per_page: 25 | 50 | 100,
    page: Number,
    sparkline: Boolean,
    locale: String,
}