import ProfilePhoto from './ProfilePhoto';

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex justify-center lg:order-2">
              <ProfilePhoto />
            </div>
            
            <div className="space-y-6 lg:order-1">
              <div className="inline-block rounded-lg bg-warm-orange/10 px-3 py-1">
                <span className="text-sm font-medium text-warm-orange">नमस्ते 🙏</span>
              </div>
              
              <div className="prose prose-lg max-w-none hindi-text">
                <p className="text-xl leading-relaxed text-foreground md:text-2xl">
                  स्वागत है मेरी डिजिटल दुनिया में। मैं हूँ लकी, और यह वेबसाइट मेरे विचारों, अनुभवों और उन चीज़ों का एक संग्रह है जिन्हें मैं प्यार करता हूँ।
                </p>
                
                <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                  यहाँ आपको मेरी ज़िंदगी की छोटी-छोटी खुशियाँ और बड़े-बड़े सपने देखने को मिलेंगे।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
