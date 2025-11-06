import { Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Our <span className="gradient-text">Story</span>
              </h1>
              <p className="text-xl text-muted-foreground">Where compassion meets action</p>
            </div>

            {/* Founder's Story */}
            <div className="space-y-8 animate-fade-in mb-16">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  Chariszion Smile Foundation was born out of a deep and personal passion for helping others. My desire to give back is rooted in my own life experiences. Growing up, life wasn't perfect, but one thing I'm certain of is that my parents gave their very best. They ensured we had access to quality education, food, and shelter—even when it came at great personal sacrifice.
                </p>
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  I vividly remember a particular incident in primary school when I was locked out of the school gate because my school fees had not been paid on time. Alongside several other children, I sat outside for most of the day until we were eventually allowed in. It was a deeply embarrassing and painful experience for me as a child—one I will never forget. That moment stayed with me and planted a seed in my heart: that one day, I would help children like me whose parents are struggling to make ends meet. I knew that, in whatever little way I could, I would pay it forward.
                </p>
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  Giving comes naturally to me—it's part of who I am. I am a product of grace and giving. God gave His only Son for me—He gave me life, salvation, and victory. I believe that since we are freely given, we should also freely give. After all, we cannot take anything with us when we leave this earth, so why not make a difference with what we have while we can?
                </p>
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  For my 30th birthday, I set a goal to feed 3,000 people. While I couldn't do it alone, I shared my vision with my family and friends, and together, we were able to feed more than half that number. Since then, for over a year now, we've continued this mission every month—feeding at least 200 people in Nigeria. We visit orphanages, streets, and churches to share food and spread hope. My greatest joy each month is seeing pictures from our outreaches—especially the smiles on the faces of children and the disabled. It brings tears to my eyes and joy to my heart, and it motivates me to do even more.
                </p>
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  Now, after doing this quietly and consistently for more than a year, we've decided it's time to open our hands and hearts even wider by bringing our work to the public. We want others to join us in making an even greater impact.
                </p>
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  This is my legacy. I have made a personal vow to feed and care for as many people as I can for as long as I live. I believe God has blessed me so I can be a blessing to others.
                </p>
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  During my personal retreat in December 2023, while listening to Minister Dunsin Oyekan at the CCI Reboot Camp, the word of God came to me clearly: <span className="font-semibold italic">"These hands will feed nations."</span> I haven't fed nations yet—but I know I'm on the path to fulfilling that word. This is my calling. This is my purpose. And I'm walking in it every single day.
                </p>
                <p className="text-lg text-card-foreground leading-relaxed">
                  If you'd like to support us, we welcome you with open arms. Your generosity will go a long way in helping us reach more people and touch more lives.
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground italic mb-2">— Olamide Opatunde, Founder</p>
              </div>
            </div>

            {/* Name Meaning Section */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <Heart className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  The Meaning Behind the Name
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-foreground/90">
                <p className="leading-relaxed">
                  The name <span className="font-bold gradient-text">Chariszion Smile Foundation</span> is rich in meaning:
                </p>
                
                <div className="space-y-4 pl-4 border-l-4 border-primary">
                  <p className="leading-relaxed">
                    <span className="font-bold text-primary">Charis</span> is the Greek word for grace or love. I have a deep love for people and a desire to share God's grace through service.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-bold text-secondary">Zion</span> represents a place of refuge, worship, and peace—a safe haven where people can come to find comfort and hope.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-bold text-accent">Smile</span> reflects my personality and my mission—to not only smile myself, but to bring smiles to the faces of others through acts of kindness.
                  </p>
                </div>
                
                <p className="leading-relaxed font-semibold text-center mt-8 text-xl">
                  Together, these words form the heart of who we are: <span className="gradient-text">Chariszion Smile Foundation</span>—a place of love, refuge, and joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
