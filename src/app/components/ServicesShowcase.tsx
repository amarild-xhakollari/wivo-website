import { Code, Smartphone, Cloud, BarChart3, Megaphone, Users, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  features?: string[];
}

interface ServicesShowcaseProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
  layout?: 'grid' | 'cards' | 'featured';
  columns?: 2 | 3 | 4;
}

const defaultServices: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Build modern, responsive websites with cutting-edge technologies. From single-page applications to complex web platforms.',
    icon: <Code className="size-6" />,
    image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzE5MDM4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['React & Next.js', 'Custom CMS', 'E-commerce Solutions'],
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Create native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
    icon: <Smartphone className="size-6" />,
    image: 'https://images.unsplash.com/photo-1730818876640-3991b169429b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzbWFydHBob25lfGVufDF8fHx8MTc3MTkxMjE3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['iOS & Android', 'React Native', 'App Store Optimization'],
  },
  {
    id: '3',
    title: 'Cloud Solutions',
    description: 'Leverage cloud infrastructure for scalable, reliable, and secure applications. Deploy and manage with confidence.',
    icon: <Cloud className="size-6" />,
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NzE4OTQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AWS & Azure', 'DevOps', 'Microservices'],
  },
  {
    id: '4',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights. Make informed decisions with advanced analytics and visualization.',
    icon: <BarChart3 className="size-6" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTk3NjM3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization'],
  },
  {
    id: '5',
    title: 'Digital Marketing',
    description: 'Grow your online presence with strategic digital marketing campaigns that drive engagement and conversions.',
    icon: <Megaphone className="size-6" />,
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsfGVufDF8fHx8MTc3MTkyODIwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['SEO & SEM', 'Social Media', 'Content Marketing'],
  },
  {
    id: '6',
    title: 'Consulting',
    description: 'Expert guidance to help you navigate digital transformation and achieve your business objectives efficiently.',
    icon: <Users className="size-6" />,
    image: 'https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxOTUzMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Strategy Planning', 'Technical Audits', 'Team Training'],
  },
];

export function ServicesShowcase({
  title = 'Our Services',
  subtitle = 'Comprehensive solutions tailored to your business needs',
  services = defaultServices,
  layout = 'cards',
  columns = 3,
}: ServicesShowcaseProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  if (layout === 'grid') {
    return (
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>

          <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                {service.features && (
                  <ul className="space-y-1 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'featured') {
    return (
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Card
                key={service.id}
                className={`overflow-hidden group hover:shadow-xl transition-shadow ${
                  idx === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`flex flex-col ${idx === 0 ? 'md:flex-row' : ''}`}>
                  {service.image && (
                    <div className={`relative overflow-hidden ${idx === 0 ? 'md:w-1/2' : 'h-48'}`}>
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 p-3 rounded-full bg-white/90 text-primary shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                  )}
                  <div className={`p-6 ${idx === 0 ? 'md:w-1/2' : ''}`}>
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    {service.features && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIdx) => (
                            <span
                              key={featureIdx}
                              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <Button variant="ghost" className="group/btn">
                      Learn More
                      <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default 'cards' layout
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-white/90 text-primary shadow-lg">
                    {service.icon}
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                {service.features && (
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 size-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <Button variant="outline" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
