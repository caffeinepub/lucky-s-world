import { ArrowRight } from 'lucide-react';

export default function ClosingSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-warm-orange/10 via-warm-yellow/10 to-warm-red/10 p-8 text-center md:p-12 lg:p-16 border-2 border-warm-orange/20">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-warm-orange/20">
              <span className="text-3xl">🌟</span>
            </div>
            
            <div className="prose prose-lg mx-auto max-w-none hindi-text">
              <p className="mb-4 text-2xl font-semibold leading-relaxed text-foreground md:text-3xl">
                आशा है कि आपको यहाँ आकर कुछ नया और दिलचस्प मिलेगा।
              </p>
              
              <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                चलिए, साथ मिलकर मेरी इस दुनिया को एक्सप्लोर करते हैं!
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-warm-orange">
              <span className="text-lg font-medium">Let's explore together</span>
              <ArrowRight className="h-5 w-5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
