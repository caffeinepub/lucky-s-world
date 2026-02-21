import { Heart, Lightbulb, Compass } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ShowcaseSection() {
  const categories = [
    {
      icon: Lightbulb,
      title: 'विचार',
      titleEn: 'Thoughts',
      description: 'मेरे मन की बातें और जीवन के अनुभव',
      descriptionEn: 'My thoughts and life experiences',
      color: 'warm-yellow',
    },
    {
      icon: Compass,
      title: 'अनुभव',
      titleEn: 'Experiences',
      description: 'यात्राएं, सीख और यादें',
      descriptionEn: 'Journeys, learnings and memories',
      color: 'warm-orange',
    },
    {
      icon: Heart,
      title: 'रुचियाँ',
      titleEn: 'Interests',
      description: 'वो चीज़ें जो मुझे प्रेरित करती हैं',
      descriptionEn: 'Things that inspire me',
      color: 'warm-red',
    },
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              मेरी दुनिया की झलकियाँ
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Glimpses of My World
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2"
                >
                  <CardHeader>
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${category.color}/10 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-7 w-7 text-${category.color}`} />
                    </div>
                    <CardTitle className="text-2xl hindi-text">{category.title}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {category.titleEn}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-base leading-relaxed text-muted-foreground hindi-text">
                      {category.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      {category.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 shadow-sm">
              <span className="text-sm text-muted-foreground">
                और भी बहुत कुछ आने वाला है...
              </span>
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
