import { Link } from 'react-router-dom';

export default function WhyDecaf() {
  const problems = [
    {
      icon: '☕',
      title: 'Mouldy, Stale Beans',
      description: 'Most coffee companies use leftover beans from damp warehouses for decaf. It\'s an easy way to squeeze more profit.'
    },
    {
      icon: '🧪',
      title: 'Washed in Methylene Chloride',
      description: 'The cheapest decaffeination method uses chemical solvents. This nasty stuff is not what you want anywhere near your body.'
    },
    {
      icon: '🔥',
      title: 'Over-roasted to Hide Its Sins',
      description: 'Beans are heavily roasted to cover up chemical taste and dampness. Any flavor that did exist is a distant memory.'
    }
  ];

  const benefits = [
    {
      icon: '😴',
      title: 'Better Sleep',
      description: 'Enjoy coffee flavor without disturbing your sleep cycle.'
    },
    {
      icon: '😌',
      title: 'No Jitters',
      description: 'Skip the caffeine anxiety and stay calm throughout the day.'
    },
    {
      icon: '💪',
      title: 'Heart Friendly',
      description: 'Lower caffeine intake supports your heart health.'
    },
    {
      icon: '⏰',
      title: 'Anytime Coffee',
      description: 'Drink coffee during evenings without worry.'
    },
    {
      icon: '✨',
      title: 'Smooth Taste',
      description: 'Rich coffee flavor with a premium, smooth experience.'
    },
    {
      icon: '🌱',
      title: 'Healthy Habit',
      description: 'Perfect for people sensitive to caffeine or just living healthier.'
    }
  ];

  return (
    <div className="w-full" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Hero Section with Beige Background */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: '#f5efe2' }}>
        <div className="text-6xl mb-6">☕</div>
        <h1 className="text-6xl font-black mb-6" style={{ fontFamily: 'font5', color: '#D97540' }}>
          Why Decaf?
        </h1>
        <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4a4a3a', lineHeight: '1.9' }}>
          People like to say decaf's for wimps. If being a wimp means <span className="font-bold" style={{ color: '#D97540' }}>no jitters, better sleep, more focus, and a healthier life</span>... sign us up!
        </p>
      </section>

      {/* Problem Section - White Background */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: 'font5', color: '#1c1d0e' }}>
          Why Most Decaf Tastes Like Dishwater
        </h2>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#6a6a5a' }}>
          The truth about cheap decaf and how it ruins the coffee experience.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="p-8 rounded-2xl" style={{ backgroundColor: '#f0ece0', border: '2px solid #e0d4bf', position: 'relative' }}>
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'font5', color: '#1c1d0e' }}>
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5a5a40' }}>
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section - Beige Accent Band */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f7f1e7' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: 'font5', color: '#1c1d0e' }}>
            The Benefits of Quality Decaf
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#6a6a5a' }}>
            Discover why our clean, quality decaf is a game-changer for your health and lifestyle.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '2px solid #e0d4bf', boxShadow: '0 4px 6px rgba(217, 117, 64, 0.1)' }}>
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'font5', color: '#D97540' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5a5a40' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Orange Accent */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-6">☕✨</div>
          <h2 className="text-4xl font-black mb-6" style={{ fontFamily: 'font5', color: '#1c1d0e' }}>
            Clean. Great. Decaf.
          </h2>
          <p className="mb-10 text-lg" style={{ color: '#5a5a40', lineHeight: '1.8' }}>
            Experience decaf the way it should be crafted. No compromises on flavor, quality, or your health. Just smooth, delicious coffee you can enjoy anytime.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 font-bold rounded-full hover:shadow-lg transition"
            style={{ backgroundColor: '#D97540', color: '#ffffff', fontFamily: 'font5', fontSize: '16px' }}
          >
            ☕ Browse Our Selection
          </Link>
        </div>
      </section>

      {/* Footer Accent */}
      <section style={{ backgroundColor: '#f5efe2', padding: '40px 20px', textAlign: 'center' }}>
        <p style={{ color: '#8a8a6a', fontSize: '14px' }}>
          🌍 Ethically sourced. Naturally decaffeinated. Made for you.
        </p>
      </section>
    </div>
  );
}
