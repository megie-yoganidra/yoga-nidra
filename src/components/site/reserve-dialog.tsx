import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { useReserve } from "./reserve-context";
import { readForm, validate, type Errors } from "@/lib/form-validation";

export function ReserveDialog() {
  const { isOpen, close } = useReserve();
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      setDone(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = readForm(e.currentTarget);
    const found = validate(values, ["firstName", "lastName", "email"]);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Join the waiting list"
    >
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-emerald-deep/60 backdrop-blur-[3px] animate-in fade-in duration-500"
      />
      <div className="relative z-10 w-full max-w-lg animate-in fade-in slide-in-from-bottom-6 duration-500">
        <div className="grain relative m-3 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-cream px-6 pb-10 pt-9 shadow-[var(--shadow-soft)] sm:rounded-3xl sm:px-12 sm:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full"
            style={{ background: "radial-gradient(circle, var(--khaki-soft) 0%, transparent 70%)" }}
          />
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-emerald/70 transition-opacity hover:opacity-60"
          >
            <X className="h-4 w-4" strokeWidth={1.25} />
          </button>

          {done ? (
            <div className="relative py-6 text-center" role="status">
              <p className="label-eyebrow text-earth">Received</p>
              <h3 className="font-display mt-5 text-3xl italic text-emerald">
                Your place is noted.
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-noir/80">
                We will write to you once the recordings are ready — quietly, and only when there is
                something worth telling.
              </p>
              <button onClick={close} className="btn-quiet mt-8 text-emerald">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="relative" noValidate>
              <p className="label-eyebrow text-earth">Yoga Nidra Course</p>
              <h3 className="font-display mt-4 text-[2rem] leading-tight text-emerald">
                Join the <em className="italic text-earth">waiting list</em>
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-noir/80">
                Leave your name and we will let you know the moment the first recordings open.
              </p>

              <div className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="First name"
                    name="firstName"
                    autoComplete="given-name"
                    error={errors["firstName"]}
                  />
                  <Field
                    label="Last name"
                    name="lastName"
                    autoComplete="family-name"
                    error={errors["lastName"]}
                  />
                </div>
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  error={errors["email"]}
                />
              </div>

              <button type="submit" className="btn-gradient mt-9 w-full">
                Reserve your spot
              </button>
              <p className="mt-4 text-center text-[11px] tracking-[0.12em] text-noir/60">
                No noise. Only the course.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string | undefined;
}) {
  return (
    <label className="block">
      <span className="label-eyebrow text-wasabi">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-2 min-h-[44px] w-full border-b bg-transparent pb-2 text-[15px] text-emerald outline-none transition-colors placeholder:text-noir/40 focus:border-earth ${
          error ? "border-earth" : "border-emerald/25"
        }`}
      />
      {error ? (
        <span id={`${name}-error`} className="mt-2 block text-[12px] text-earth">
          {error}
        </span>
      ) : null}
    </label>
  );
}
