"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "KRW", name: "South Korean Won", flag: "🇰🇷" },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷" },
  { code: "MXN", name: "Mexican Peso", flag: "🇲🇽" },
  { code: "TRY", name: "Turkish Lira", flag: "🇹🇷" },
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦" },
  { code: "SEK", name: "Swedish Krona", flag: "🇸🇪" },
  { code: "NOK", name: "Norwegian Krone", flag: "🇳🇴" },
  { code: "DKK", name: "Danish Krone", flag: "🇩🇰" },
  { code: "PLN", name: "Polish Złoty", flag: "🇵🇱" },
  { code: "CZK", name: "Czech Koruna", flag: "🇨🇿" },
  { code: "HUF", name: "Hungarian Forint", flag: "🇭🇺" },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭" },
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭" },
  { code: "ILS", name: "Israeli New Shekel", flag: "🇮🇱" },
  { code: "ISK", name: "Icelandic Króna", flag: "🇮🇸" },
  { code: "PKR", name: "Pakistani Rupee", flag: "🇵🇰" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪" },
  { code: "SAR", name: "Saudi Riyal", flag: "🇸🇦" },
  { code: "BDT", name: "Bangladeshi Taka", flag: "🇧🇩" },
  { code: "NPR", name: "Nepalese Rupee", flag: "🇳🇵" },
  { code: "LKR", name: "Sri Lankan Rupee", flag: "🇱🇰" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾" },
  { code: "VND", name: "Vietnamese Dong", flag: "🇻🇳" },
  { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬" },
  { code: "EGP", name: "Egyptian Pound", flag: "🇪🇬" },
  { code: "QAR", name: "Qatari Riyal", flag: "🇶🇦" },
  { code: "KWD", name: "Kuwaiti Dinar", flag: "🇰🇼" },
  { code: "RUB", name: "Russian Ruble", flag: "🇷🇺" },
  { code: "UAH", name: "Ukrainian Hryvnia", flag: "🇺🇦" },
  { code: "RON", name: "Romanian Leu", flag: "🇷🇴" },
  { code: "BGN", name: "Bulgarian Lev", flag: "🇧🇬" },
  { code: "ARS", name: "Argentine Peso", flag: "🇦🇷" },
  { code: "CLP", name: "Chilean Peso", flag: "🇨🇱" },
  { code: "COP", name: "Colombian Peso", flag: "🇨🇴" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰" },
  { code: "KES", name: "Kenyan Shilling", flag: "🇰🇪" },
  { code: "MAD", name: "Moroccan Dirham", flag: "🇲🇦" },
  { code: "GEL", name: "Georgian Lari", flag: "🇬🇪" },
  { code: "GHS", name: "Ghanaian Cedi", flag: "🇬🇭" },
  { code: "BHD", name: "Bahraini Dinar", flag: "🇧🇭" },
  { code: "BOB", name: "Bolivian Boliviano", flag: "🇧🇴" },
  { code: "KZT", name: "Kazakhstani Tenge", flag: "🇰🇿" },
  { code: "TWD", name: "New Taiwan Dollar", flag: "🇹🇼" },
  { code: "PEN", name: "Peruvian Sol", flag: "🇵🇪" },
  { code: "UYU", name: "Uruguayan Peso", flag: "🇺🇾" },
  { code: "CRC", name: "Costa Rican Colón", flag: "🇨🇷" },
  { code: "DOP", name: "Dominican Peso", flag: "🇩🇴" },
  { code: "DZD", name: "Algerian Dinar", flag: "🇩🇿" },
  { code: "ETB", name: "Ethiopian Birr", flag: "🇪🇹" },
  { code: "JOD", name: "Jordanian Dinar", flag: "🇯🇴" },
  { code: "JMD", name: "Jamaican Dollar", flag: "🇯🇲" },
  { code: "KHR", name: "Cambodian Riel", flag: "🇰🇭" },
  { code: "LAK", name: "Lao Kip", flag: "🇱🇦" },
  { code: "MUR", name: "Mauritian Rupee", flag: "🇲🇺" },
  { code: "MZN", name: "Mozambican Metical", flag: "🇲🇿" },
  { code: "OMR", name: "Omani Rial", flag: "🇴🇲" },
  { code: "PYG", name: "Paraguayan Guaraní", flag: "🇵🇾" },
  { code: "RSD", name: "Serbian Dinar", flag: "🇷🇸" },
  { code: "RWF", name: "Rwandan Franc", flag: "🇷🇼" },
  { code: "TND", name: "Tunisian Dinar", flag: "🇹🇳" },
  { code: "TZS", name: "Tanzanian Shilling", flag: "🇹🇿" },
  { code: "UGX", name: "Ugandan Shilling", flag: "🇺🇬" },
  { code: "UZS", name: "Uzbekistani Soʻm", flag: "🇺🇿" },
];

const quickPairs = [
  ["USD", "EUR"],
  ["EUR", "GBP"],
  ["USD", "JPY"],
  ["GBP", "USD"],
] as const;

function currencyInfo(code: string) {
  return currencies.find((currency) => currency.code === code);
}

function formatCurrency(value: number, code: string) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: code,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function Home() {
  const [amount, setAmount] = useState("250");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rateResult, setRateResult] = useState<{
    key: string;
    rate: number;
    date: string;
    error: string | null;
  } | null>(null);
  const [refresh, setRefresh] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);
  const requestKey = `${from}-${to}-${refresh}`;
  const currentResult = rateResult?.key === requestKey ? rateResult : null;
  const isSameCurrency = from === to;
  const rate =
    isSameCurrency ? 1 : currentResult && !currentResult.error ? currentResult.rate : null;
  const rateDate =
    isSameCurrency || currentResult?.error ? null : currentResult?.date ?? null;
  const loading = !isSameCurrency && currentResult === null;
  const error = isSameCurrency ? null : currentResult?.error ?? null;

  useEffect(() => {
    if (from === to) {
      return;
    }

    const controller = new AbortController();
    const key = `${from}-${to}-${refresh}`;

    async function loadRate() {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${from}`,
          { signal: controller.signal, cache: "no-store" },
        );

        if (!response.ok) {
          throw new Error("We couldn’t load the latest exchange rate.");
        }

        const data: {
          result: string;
          time_last_update_utc: string;
          rates: Record<string, number>;
          "error-type"?: string;
        } = await response.json();
        if (data.result !== "success") {
          throw new Error(
            data["error-type"]
              ? `The exchange rate service reported: ${data["error-type"]}.`
              : "The exchange rate service couldn’t provide rates right now.",
          );
        }

        const rate = data.rates?.[to];
        const updatedAt = new Date(data.time_last_update_utc);
        if (
          typeof rate !== "number" ||
          !Number.isFinite(rate) ||
          !Number.isFinite(updatedAt.getTime())
        ) {
          throw new Error(
            `A current ${from} to ${to} exchange rate isn’t available.`,
          );
        }

        setRateResult({
          key,
          rate,
          date: new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(updatedAt),
          error: null,
        });
      } catch (cause) {
        if (!controller.signal.aborted) {
          setRateResult({
            key,
            rate: 0,
            date: "",
            error: cause instanceof Error
              ? cause.message
              : "Something went wrong while loading the exchange rate.",
          });
        }
      }
    }

    void loadRate();
    return () => controller.abort();
  }, [from, to, refresh]);

  const numericAmount = Number(amount);
  const converted =
    rate !== null &&
    amount.trim() !== "" &&
    Number.isFinite(numericAmount) &&
    numericAmount >= 0
      ? numericAmount * rate
      : null;
  const fromCurrency = currencyInfo(from);
  const toCurrency = currencyInfo(to);

  function swapCurrencies() {
    setFrom(to);
    setTo(from);
  }

  function selectPair(base: string, target: string) {
    setFrom(base);
    setTo(target);
  }

  async function copyResult() {
    if (converted === null) return;

    try {
      await navigator.clipboard.writeText(
        `${formatCurrency(converted, to)} ${to}`,
      );
      setCopied(true);
      setCopyError(null);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyError("Clipboard access is unavailable in this browser.");
    }
  }

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <div className="star-field" aria-hidden="true" />

      <header className="topbar">
        <Link className="brand" href="/" aria-label="Moneta home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M16 3.5 27 9.75v12.5L16 28.5 5 22.25V9.75L16 3.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M11 20V12l5 5 5-5v8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </span>
          <span className="brand-name">moneta<span>.</span></span>
        </Link>

        <div className="market-status">
          <span className="status-dot" />
          <span>Exchange rates</span>
          <span className="status-divider" />
          <span className="status-muted">Updated daily</span>
        </div>

        <a className="topbar-link" href="#converter">
          Convert now <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-icon" aria-hidden="true">✳</span>
            MONEY, WITHOUT BORDERS
          </div>
          <h1 id="hero-title">
            Make every
            <br />
            <span>cent count.</span>
          </h1>
          <p className="hero-description">
            Convert currencies in a blink. Clear rates, no guesswork, just
            wherever life takes you.
          </p>
          <div className="trust-note">
            <span className="trust-avatars" aria-hidden="true">
              <span>✦</span><span>◉</span><span>↗</span>
            </span>
            <span>For curious minds &amp; world roamers</span>
          </div>
        </div>

        <section className="converter-card" id="converter" aria-label="Currency converter">
          <div className="card-heading">
            <div>
              <div className="card-kicker">THE CONVERTER</div>
              <h2>How much is it?</h2>
            </div>
            <button
              className="refresh-button"
              type="button"
              onClick={() => setRefresh((value) => value + 1)}
              aria-label="Refresh exchange rate"
              title="Refresh exchange rate"
              disabled={loading}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={loading ? "refresh-icon is-spinning" : "refresh-icon"}
                aria-hidden="true"
              >
                <path
                  d="M16.3 8A6.5 6.5 0 0 0 5 4.7L3.5 6.2M3.5 6.2V2.8m0 3.4h3.4M3.7 12A6.5 6.5 0 0 0 15 15.3l1.5-1.5m0 0v3.4m0-3.4h-3.4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>

          <div className="currency-fields">
            <label className="currency-field">
              <span className="field-label">YOU SEND</span>
              <div className="field-controls">
                <input
                  aria-label="Amount to convert"
                  className="amount-input"
                  inputMode="decimal"
                  type="number"
                  min="0"
                  step="any"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="0"
                />
                <span className="field-divider" />
                <span className="currency-flag" aria-hidden="true">{fromCurrency?.flag}</span>
                <select
                  aria-label="Currency to convert from"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code}
                    </option>
                  ))}
                </select>
                <span className="select-chevron" aria-hidden="true">⌄</span>
              </div>
              <span className="currency-name">{fromCurrency?.name}</span>
            </label>

            <div className="swap-row">
              <span className="swap-line" />
              <button
                className="swap-button"
                type="button"
                onClick={swapCurrencies}
                aria-label="Swap currencies"
                title="Swap currencies"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 7h12m0 0-3-3m3 3-3 3M17 17H5m0 0 3 3m-3-3 3-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                </svg>
              </button>
              <span className="swap-line" />
            </div>

            <div className="currency-field result-field">
              <span className="field-label">YOU GET</span>
              <div className="field-controls result-controls">
                <output className="result-amount" aria-live="polite">
                  {loading
                    ? <span className="result-placeholder">···</span>
                    : converted === null
                      ? <span className="result-placeholder">—</span>
                      : formatCurrency(converted, to)}
                </output>
                <span className="field-divider" />
                <span className="currency-flag" aria-hidden="true">{toCurrency?.flag}</span>
                <select
                  aria-label="Currency to convert to"
                  value={to}
                  onChange={(event) => setTo(event.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code}
                    </option>
                  ))}
                </select>
                <span className="select-chevron" aria-hidden="true">⌄</span>
              </div>
              <span className="currency-name">{toCurrency?.name}</span>
            </div>
          </div>

          <div className="rate-summary" aria-live="polite">
            {loading ? (
              <span className="rate-loading"><span className="tiny-spinner" /> Getting the latest rate…</span>
            ) : error ? (
              <span className="rate-error" role="alert">{error}</span>
            ) : rate !== null ? (
              <span>
                <span className="rate-equals">1 {from} = </span>
                <strong>{new Intl.NumberFormat(undefined, { maximumFractionDigits: 6 }).format(rate)} {to}</strong>
                <span className="rate-date">{rateDate ? ` · Rate from ${rateDate}` : " · Same currency"}</span>
              </span>
            ) : null}
            {converted !== null && !error && !loading && (
              <button
                className="copy-button"
                type="button"
                onClick={() => void copyResult()}
                aria-label="Copy converted amount"
              >
                {copied ? "Copied!" : "Copy"}
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="5.5" y="5.5" width="7.5" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M10.5 5.5V3.8A1.3 1.3 0 0 0 9.2 2.5H3.8a1.3 1.3 0 0 0-1.3 1.3v5.4a1.3 1.3 0 0 0 1.3 1.3h1.7" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            )}
            {copyError && <span className="copy-error" role="status">{copyError}</span>}
          </div>

          {error && (
            <button
              className="retry-link"
              type="button"
              onClick={() => setRefresh((value) => value + 1)}
            >
              Try again <span aria-hidden="true">↗</span>
            </button>
          )}

          <div className="card-footnote">
            <span className="footnote-lock" aria-hidden="true">✳</span>
            Mid-market exchange rates, updated daily
          </div>
        </section>
      </section>

      <section className="quick-section" aria-labelledby="quick-title">
        <div className="quick-heading">
          <div>
            <span className="section-kicker">A GOOD PLACE TO START</span>
            <h2 id="quick-title">Popular conversions</h2>
          </div>
          <span className="quick-caption">Tap a pair to get going <span aria-hidden="true">↘</span></span>
        </div>
        <div className="pair-list">
          {quickPairs.map(([base, target], index) => (
            <button
              className={`pair-card${from === base && to === target ? " pair-active" : ""}`}
              type="button"
              key={`${base}-${target}`}
              onClick={() => selectPair(base, target)}
              aria-pressed={from === base && to === target}
            >
              <span className="pair-number">0{index + 1}</span>
              <span className="pair-currencies">
                <span className="pair-flag">{currencyInfo(base)?.flag}</span>
                <span className="pair-code">{base}</span>
                <span className="pair-arrow" aria-hidden="true">↗</span>
                <span className="pair-flag">{currencyInfo(target)?.flag}</span>
                <span className="pair-code">{target}</span>
              </span>
              <span className="pair-open" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 moneta. Made for wherever you’re headed.</span>
        <span className="footer-data"><span className="status-dot" /> Rates by ExchangeRate-API</span>
      </footer>
    </main>
  );
}
