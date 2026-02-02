const branch = import.meta.env.VITE_BRANCH;
const isMain = branch == "main";
const isStaging = branch == "staging";

export const Config = {
  INNOCORE_URL: isMain
    ? "https://innocore.innovox.ai"
    : isStaging
    ? "https://staging.innocore.innovox.ai"
    : "http://localhost:8080",
  PUBCMS_URL: isMain
    ? "https://pubcms.innovox.ai"
    : isStaging
    ? "https://staging.pubcms.innovox.ai"
    : "http://localhost:8000",
  KAI_URL: isMain
    ? "https://kaiassist.ai"
    : isStaging
    ? "https://dev.kaiassist.ai"
    : "http://localhost:5173",
  SUMMAHUB_URL: isMain
    ? "https://summahub.ai"
    : isStaging
    ? "https://dev.summahub.ai"
    : "http://localhost:5173",
  GA_MEASUREMENT_ID: isMain ? "G-MGFWDXCRW9" : "G-XXXXXXXXXX",
};
