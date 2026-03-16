import { FC, ComponentType, memo, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Play, Home } from "lucide-react";
import { useLang, type Lang } from "@/lib/lang";

interface StatItem{icon:ComponentType<{className?:string}>;number:string;label:string;}
type SectionType="gallery"|"video"|"exterior";
interface SectionCardProps{title:string;description:string;mainImage:string;previewItems:string[];stats:StatItem[];linkTo:string;type?:SectionType;lang:Lang;}
interface SectionHeaderProps{title:string;description:string;}
interface StatsGridProps{stats:StatItem[];}

const galleryData={images:["bedroom3.jpg","Living.jpeg","bedroom2.jpg"],stats:[]}as const;
const videoData={thumbnails:["a9e3b97c-29e7-4cff-b8ad-67925bc23866.jpeg","Dining.webp","2_2 - Photo.jpg"],stats:[]}as const;
const exteriorData={images:["architectural.jpg","ryp(2).PNG","ryp(1).JPG"],stats:[]}as const;

const SECTION_TEXT = {
  en: {
    galleryPreview: "Gallery Preview",
    videoPreview: "Video Previews",
    exteriorPreview: "Exterior Designs Preview",
    images: "images",
    videos: "videos",
    designs: "designs",
    liveUpdates: "Live Updates",
    newVideos: "New Videos",
    latestProjects: "Latest Projects",
    newProjectsWeekly: "New projects weekly",
    updatedRegularly: "Updated regularly",
    ongoingDevelopments: "Ongoing developments",
    exploreGallery: "Explore Gallery",
    watchVideos: "Watch Videos",
    viewExteriors: "View Exteriors",
    collectionProgress: "Collection Progress",
    contentProgress: "Content Progress",
    projectsProgress: "Projects Progress",
    premiumCollection: "Premium Collection",
    premiumContent: "Premium Content",
    premiumArchitecture: "Premium Architecture",
  },
  ar: {
    galleryPreview: "لمحة عن المعرض",
    videoPreview: "لمحات فيديو",
    exteriorPreview: "لمحة عن التصاميم الخارجية",
    images: "صور",
    videos: "فيديوهات",
    designs: "تصاميم",
    liveUpdates: "تحديثات مباشرة",
    newVideos: "فيديوهات جديدة",
    latestProjects: "أحدث المشاريع",
    newProjectsWeekly: "مشاريع جديدة أسبوعيًا",
    updatedRegularly: "يتم التحديث باستمرار",
    ongoingDevelopments: "مشاريع قيد التطوير",
    exploreGallery: "استكشف المعرض",
    watchVideos: "شاهد الفيديوهات",
    viewExteriors: "عرض الخارجي",
    collectionProgress: "تقدّم المعرض",
    contentProgress: "تقدّم المحتوى",
    projectsProgress: "تقدّم المشاريع",
    premiumCollection: "مجموعة مميزة",
    premiumContent: "محتوى مميز",
    premiumArchitecture: "عمارة مميزة",
  },
} as const;

const INDEX_TEXT = {
  en: {
    portfolioTitle: "Design Portfolio",
    portfolioDesc: "Discover our curated collection of modern interior designs where innovation meets comfort",
    galleryTitle: "Elevating Interior Design",
    galleryDesc: "Where aesthetics meet comfort in perfect harmony",
    exteriorTitle: "Exterior Designs",
    exteriorDesc: "Transform your outdoor spaces with stunning architectural facades and landscape designs",
    exteriorCardTitle: "Architectural Excellence",
    exteriorCardDesc: "Creating captivating exteriors that blend with nature",
    videosTitle: "Design Videos",
    videosDesc: "Watch our design process come to life through captivating videos",
    videosCardTitle: "Behind The Design",
    videosCardDesc: "Exclusive look at our creative process",
  },
  ar: {
    portfolioTitle: "معرض التصاميم",
    portfolioDesc: "اكتشف مجموعتنا المختارة من التصاميم الداخلية الحديثة حيث يلتقي الإبداع مع الراحة",
    galleryTitle: "تصميمات داخلية راقية",
    galleryDesc: "حيث تلتقي الجماليات بالراحة في انسجام مثالي",
    exteriorTitle: "التصاميم الخارجية",
    exteriorDesc: "حوّل مساحاتك الخارجية بواجهات معمارية ومناظر طبيعية مذهلة",
    exteriorCardTitle: "تميّز معماري",
    exteriorCardDesc: "تصاميم خارجية آسرة تمتزج مع الطبيعة",
    videosTitle: "فيديوهات التصميم",
    videosDesc: "تابع عملية التصميم عبر فيديوهات ملهمة",
    videosCardTitle: "خلف التصميم",
    videosCardDesc: "نظرة حصرية على عملية الإبداع",
  },
} as const;

const SectionCard:FC<SectionCardProps>=memo(({title,description,mainImage,previewItems,stats,linkTo,type="gallery",lang})=>{
const isVideo=type==="video";const isExterior=type==="exterior";const t=SECTION_TEXT[lang];
return(
<div className="flex justify-center mb-8">
<Link to={linkTo} className="group block w-full max-w-4xl overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
<div className="relative overflow-hidden bg-gray-900">
<div className={`w-full h-64 md:h-96 flex items-center justify-center relative ${isVideo?"bg-gray-900":isExterior?"bg-gradient-to-br from-blue-900/20 to-green-900/20":""}`}>
{isVideo?(<>
<div className="relative z-10">
<div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
<Play className="w-8 h-8 text-white ml-1"/>
</div>
</div>
<img src={mainImage} alt="Video preview" className="absolute inset-0 w-full h-full object-cover opacity-60"/>
</>):(
<img src={mainImage} alt={isExterior?"Exterior Design Gallery":"Interior Design Gallery"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
)}
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-end justify-between">
<div className="flex-1">
<h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{title}</h3>
<p className="text-gray-300 text-lg mb-2 hidden md:block">{description}</p>
<div className="flex items-center gap-2">
<div className="flex">{[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4 fill-white text-white"/>)}</div>
<span className="text-gray-300 text-sm">{type==="gallery"?t.premiumCollection:type==="video"?t.premiumContent:t.premiumArchitecture}</span>
</div>
</div>
<div className={`p-3 rounded-full border transition-all duration-300 ${type==="gallery"?"bg-white/20 backdrop-blur-sm border-white/30 group-hover:bg-white/30":type==="video"?"bg-white/10 backdrop-blur-sm border-white/20 group-hover:bg-white/20":"bg-[#1f2937]/20 backdrop-blur-sm border-[#1f2937]/30 group-hover:bg-[#1f2937]/30"}`}>
<ArrowRight className="w-5 h-5 text-white"/>
</div>
</div>
</div>
</div>

<div className="p-4 bg-gray-50 border-t border-gray-200">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-800">{type==="gallery"?t.galleryPreview:type==="video"?t.videoPreview:t.exteriorPreview}</span>
<span className="text-xs text-gray-600">{previewItems.length} {type==="gallery"?t.images:type==="video"?t.videos:t.designs}</span>
</div>
<div className="grid grid-cols-3 gap-3">
{previewItems.map((item,i)=>(
<div key={i} className="relative group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
<img src={item} alt={`preview ${i+1}`} className="w-full h-24 md:h-28 object-cover transition-transform duration-500 group-hover:scale-110"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
{isVideo&&<Play className="w-5 h-5 text-white"/>}
</div>
</div>
))}
</div>
</div>

<div className="p-4 bg-white">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className={`w-2 h-2 rounded-full ${type==="gallery"?"bg-green-500":type==="video"?"bg-[#1f2937]":"bg-[#1f2937]"}`}/>
<span className="text-sm font-medium text-gray-800">{type==="gallery"?t.liveUpdates:type==="video"?t.newVideos:t.latestProjects}</span>
</div>
<div className="w-px h-4 bg-gray-300"/>
<span className="text-sm text-gray-600">{type==="gallery"?t.newProjectsWeekly:type==="video"?t.updatedRegularly:t.ongoingDevelopments}</span>
</div>
<span className="text-sm font-medium text-gray-800">{type==="gallery"?t.exploreGallery:type==="video"?t.watchVideos:t.viewExteriors}</span>
</div>

<div className="space-y-1">
<div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
<div className={`h-2 rounded-full transition-all duration-500 ${type==="gallery"?"bg-gray-800 w-4/5":type==="video"?"bg-[#1f2937] w-3/4":"bg-[#1f2937] w-2/3"}`}/>
</div>
<div className="flex justify-between text-xs text-gray-600">
<span>{type==="gallery"?t.collectionProgress:type==="video"?t.contentProgress:t.projectsProgress}</span>
<span>{type==="gallery"?"80%":type==="video"?"75%":"65%"}</span>
</div>
</div>
</div>
</Link>
</div>
)});
SectionCard.displayName="SectionCard";

const SectionHeader:FC<SectionHeaderProps>=memo(({title,description})=>(
<div className="text-center mb-6">
<div className="flex items-center justify-center gap-2 mb-3">
<div className="w-2 h-2 bg-black rounded-full"/>
<h2 className="text-2xl md:text-4xl font-bold text-black">{title}</h2>
<div className="w-2 h-2 bg-black rounded-full"/>
</div>
<p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">{description}</p>
</div>
));
SectionHeader.displayName="SectionHeader";

const StatsGrid:FC<StatsGridProps>=memo(({stats})=>{
if(!stats.length)return null;
return(
<div className={`grid gap-4 max-w-3xl mx-auto mb-8 ${stats.length===3?"grid-cols-1 md:grid-cols-3":"grid-cols-1 md:grid-cols-2"}`}>
{stats.map((stat,i)=>(
<div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 text-gray-800 mb-3">
<stat.icon className="w-7 h-7"/>
</div>
<div className="text-2xl font-bold text-black mb-1">{stat.number}</div>
<div className="text-gray-600 font-medium text-sm">{stat.label}</div>
</div>
))}
</div>
)});
StatsGrid.displayName="StatsGrid";

const Index:FC=()=>{
const { lang } = useLang();
const t = INDEX_TEXT[lang];
useEffect(()=>{
const elements=Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
if(!elements.length)return;
const observer=new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.setAttribute("data-in-view","true");
observer.unobserve(entry.target);
}
});
},{threshold:0.2,rootMargin:"0px 0px -10% 0px"});
elements.forEach((el)=>observer.observe(el));
return()=>observer.disconnect();
},[]);
return(
<div className="min-h-screen bg-white">
<Header/>
<main>
<style>{`
  .lux-reveal {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
    filter: blur(6px);
    transition: opacity 700ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 700ms cubic-bezier(0.4, 0, 0.2, 1),
      filter 700ms cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform, filter;
  }
  .lux-reveal[data-in-view="true"] {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`}</style>
<section id="home"><Hero/></section>
<section id="about"><About/></section>

<section id="gallery" className="py-8 px-4 bg-white">
<div className="max-w-6xl mx-auto">
<div data-animate className="lux-reveal" style={{transitionDelay:"0ms"}}>
<SectionHeader title={t.portfolioTitle} description={t.portfolioDesc}/>
</div>
<div data-animate className="lux-reveal" style={{transitionDelay:"120ms"}}>
<SectionCard title={t.galleryTitle} description={t.galleryDesc} mainImage="Living.jpeg" previewItems={[...galleryData.images]} stats={[...galleryData.stats]} linkTo="/gallery" type="gallery" lang={lang}/>
</div>
<StatsGrid stats={[...galleryData.stats]}/>
</div>
</section>

<section id="exterior" className="py-8 bg-gradient-to-br from-gray-50 to-emerald-50">
<div className="max-w-6xl mx-auto px-4">
<div data-animate className="lux-reveal" style={{transitionDelay:"0ms"}}>
<SectionHeader title={t.exteriorTitle} description={t.exteriorDesc}/>
</div>
<div data-animate className="lux-reveal" style={{transitionDelay:"120ms"}}>
<SectionCard title={t.exteriorCardTitle} description={t.exteriorCardDesc} mainImage={exteriorData.images[0]} previewItems={[...exteriorData.images]} stats={[...exteriorData.stats]} linkTo="/exterior" type="exterior" lang={lang}/>
</div>
<StatsGrid stats={[...exteriorData.stats]}/>
</div>
</section>

<section id="line" className="py-8 bg-gray-50">
<div className="max-w-6xl mx-auto px-4">
<div data-animate className="lux-reveal" style={{transitionDelay:"0ms"}}>
<SectionHeader title={t.videosTitle} description={t.videosDesc}/>
</div>
<div data-animate className="lux-reveal" style={{transitionDelay:"120ms"}}>
<SectionCard title={t.videosCardTitle} description={t.videosCardDesc} mainImage={videoData.thumbnails[0]} previewItems={[...videoData.thumbnails]} stats={[...videoData.stats]} linkTo="/line" type="video" lang={lang}/>
</div>
<StatsGrid stats={[...videoData.stats]}/>
</div>
</section>

</main>
<Footer/>
</div>
);
};
export default Index;
