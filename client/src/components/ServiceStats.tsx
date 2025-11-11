import { motion } from "framer-motion";
import { Clock, DollarSign, CheckCircle } from "lucide-react";

export default function ServiceStats() {
  const stats = [
    {
      icon: Clock,
      value: "2-7 Days",
      label: "Delivery Time"
    },
    {
      icon: DollarSign,
      value: "$3K-$10K",
      label: "Project Range"
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Satisfaction"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              data-testid={`stat-${index}`}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
