"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, CheckCircle, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Properties",
          id: "#properties",
        },
        {
          name: "Cars",
          id: "#cars",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Syria Market"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="وجهتك الموثوقة للعقارات والسيارات في سوريا"
      description="اكتشف أفضل العروض العقارية وأحدث السيارات في سوريا بكل سهولة وأمان."
      buttons={[
        {
          text: "اتصل بنا الآن",
          href: "tel:0997467230",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-elegant-old-man-car-salon_1157-31831.jpg"
      imageAlt="Syria real estate and car market"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/professional-woman-standing-with-coffee-busy-street-smiling-camera_1258-119452.jpg",
          alt: "Professional woman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-smiling-businessman_1163-3871.jpg",
          alt: "Young businessman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beauty-businesswoman-leaning-against-brick-wall_613910-773.jpg",
          alt: "Businesswoman portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/studio-portrait-redhead-bearded-male-dressed-suit-posing-grey-background_613910-11594.jpg",
          alt: "Successful professional man",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-successful-young-businessman-with-his-arms-crossed-looking-camera_23-2148176207.jpg",
          alt: "Successful businessman",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "عقارات سكنية وتجارية",
        },
        {
          type: "text",
          text: "أحدث موديلات السيارات",
        },
        {
          type: "text",
          text: "خدمات موثوقة",
        },
        {
          type: "text",
          text: "استشارات خبيرة",
        },
        {
          type: "text",
          text: "أسعار تنافسية",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1000+",
          title: "عقار مباع",
          items: [
            "شقق سكنية",
            "فلل فاخرة",
            "أراضي تجارية",
          ],
        },
        {
          id: "m2",
          value: "500+",
          title: "سيارة مباعة",
          items: [
            "سيارات حديثة",
            "سيارات اقتصادية",
            "سيارات دفع رباعي",
          ],
        },
        {
          id: "m3",
          value: "24/7",
          title: "دعم فني",
          items: [
            "خدمة العملاء",
            "استشارات قانونية",
            "متابعة مستمرة",
          ],
        },
      ]}
      title="إنجازاتنا في أرقام"
      description="نفخر بخدمة الآلاف في سوق العقارات والسيارات السوري."
    />
  </div>

  <div id="properties" data-section="properties">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "شقة في دمشق",
          price: "اتصل للسعر",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-mediterranean-door_23-2150902540.jpg",
        },
        {
          id: "p2",
          name: "فيلا فاخرة",
          price: "اتصل للسعر",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-business-building-with-glass-wall-from-empty-floor_1127-3106.jpg",
        },
        {
          id: "p3",
          name: "أرض تجارية",
          price: "اتصل للسعر",
          imageSrc: "http://img.b2bpic.net/free-photo/analog-city-landscape-with-buildings_23-2149661414.jpg",
        },
        {
          id: "p4",
          name: "شقة في حلب",
          price: "اتصل للسعر",
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-property-purchase-concept_53876-134037.jpg",
        },
        {
          id: "p5",
          name: "مكتب تجاري",
          price: "اتصل للسعر",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-designed-building-view_23-2148230382.jpg",
        },
        {
          id: "p6",
          name: "بيت ريفي",
          price: "اتصل للسعر",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-building-with-closed-windows_23-2148252721.jpg",
        },
      ]}
      title="أحدث العقارات"
      description="تصفح قائمة العقارات المتاحة لدينا اليوم."
    />
  </div>

  <div id="cars" data-section="cars">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "سيارة سيدان",
          description: "بحالة الوكالة، صيانة دورية.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-choosing-car-car-show-room_1303-15114.jpg",
        },
        {
          title: "سيارة دفع رباعي",
          description: "قوية ومناسبة لجميع الطرق.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-women-with-smartphone-near-man-looking-map-car-hood_23-2148039112.jpg",
        },
        {
          title: "سيارة رياضية",
          description: "تصميم أنيق وأداء عالٍ.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-elegant-people-car-salon_1157-30160.jpg",
        },
      ]}
      title="سيارات مميزة للبيع"
      description="سيارات بحالة ممتازة وبأسعار منافسة."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "محمد علي",
          date: "2023-10-01",
          title: "عميل راضٍ",
          quote: "تجربة رائعة، العقار كان مطابقاً للمواصفات تماماً.",
          tag: "عقارات",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-corporate-woman-looks-dreamy-smiles-stands-outside-street-leans-her-head-hands_1258-193990.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-elegant-old-man-car-salon_1157-31831.jpg",
          imageAlt: "professional man portrait",
        },
        {
          id: "2",
          name: "سارة أحمد",
          date: "2023-10-15",
          title: "عميلة راضية",
          quote: "شراء السيارة كان سهلاً وسريعاً جداً.",
          tag: "سيارات",
          avatarSrc: "http://img.b2bpic.net/free-photo/business-woman-with-crossed-arms-smiling_23-2148095677.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-mediterranean-door_23-2150902540.jpg",
          imageAlt: "professional man portrait",
        },
        {
          id: "3",
          name: "عمر خالد",
          date: "2023-11-01",
          title: "عميل راضٍ",
          quote: "خدمة احترافية جداً، أنصح بالتعامل معهم.",
          tag: "عقارات",
          avatarSrc: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17097.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-business-building-with-glass-wall-from-empty-floor_1127-3106.jpg",
          imageAlt: "professional man portrait",
        },
        {
          id: "4",
          name: "ليلى محمود",
          date: "2023-11-20",
          title: "عميلة راضية",
          quote: "السيارة كانت ممتازة، تعاملهم شفاف.",
          tag: "سيارات",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-posing_23-2149271087.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/analog-city-landscape-with-buildings_23-2149661414.jpg",
          imageAlt: "professional man portrait",
        },
        {
          id: "5",
          name: "ياسر ناصر",
          date: "2023-12-05",
          title: "عميل راضٍ",
          quote: "أفضل مكتب عقاري تعاملت معه في دمشق.",
          tag: "عقارات",
          avatarSrc: "http://img.b2bpic.net/free-photo/front-view-sign-language-concept_23-2148572467.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-choosing-car-car-show-room_1303-15114.jpg",
          imageAlt: "professional man portrait",
        },
      ]}
      title="ماذا يقول عملاؤنا"
      description="آراء عملائنا الذين وثقوا بخدماتنا."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <AboutMetric
      useInvertedBackground={false}
      title="لماذا تختارنا؟"
      metrics={[
        {
          label: "مصداقية",
          value: "100%",
          icon: CheckCircle,
        },
        {
          label: "خبرة",
          value: "15+ عام",
          icon: Award,
        },
        {
          label: "انتشار",
          value: "جميع المحافظات",
          icon: MapPin,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "كيف يمكنني حجز عقار؟",
          content: "يمكنك التواصل معنا عبر الهاتف لحجز موعد للمعاينة.",
        },
        {
          id: "f2",
          title: "هل يوجد تقسيط للسيارات؟",
          content: "نعم، نقدم حلول تمويلية مرنة للعديد من أنواع السيارات.",
        },
        {
          id: "f3",
          title: "هل يمكن عرض عقاري لديكم؟",
          content: "بالتأكيد، يمكنكم إرسال تفاصيل العقار لنا لنقوم بتسويقه.",
        },
      ]}
      title="الأسئلة الشائعة"
      description="إجابات على أكثر الأسئلة تكراراً."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="تواصل معنا"
      title="نحن هنا لمساعدتك"
      description="اتصل بنا الآن على الرقم 0997467230 وسنقوم بالرد على كافة استفساراتك."
      buttons={[
        {
          text: "اتصل الآن",
          href: "tel:0997467230",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Syria Market"
      leftLink={{
        text: "اتصل بنا: 0997467230",
        href: "tel:0997467230",
      }}
      rightLink={{
        text: "© 2024 جميع الحقوق محفوظة",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
