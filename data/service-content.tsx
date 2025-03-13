// Service content in both languages
export const serviceContent: Record<string, Record<string, string>> = {
  "new-passport": {
    en: `
    <div class="mt-4">
      <p class="text-lg font-medium mb-2">New Passport applicants must fulfil the following requirements:</p>
      <p class="mb-4"><strong>1. Prepare all the required documents for this service:</strong></p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li class="text-base">Valid Kebele Identity card.</li>
        <li class="text-base">Authenticated Birth certificate.</li>
      </ul>
      <p class="mb-2"><strong>2. Check the service fee for a new Passport:</strong></p>
      <table class="border-collapse border border-gray-300 mt-2 w-full">
        <thead>
          <tr class="bg-gray-700 text-white">
            <th class="border border-gray-300 p-2">Passport Type</th>
            <th class="border border-gray-300 p-2">Price (ETB)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="border border-gray-300 p-2">New</td>
            <td class="border border-gray-300 p-2">5000</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-4 mb-2"><strong>3. Scan all the required documents and resize them according to the guidelines.</strong></p>
      <p class="mb-4">4. Payment will be through online platforms or banks using the payment code generated after submitting the application form.</p>
      <p class="mb-2">5. After you apply for the service, you must print the last page, which contains your appointment and delivery date and time. Bring the printed paper with you to your appointment.</p>
      <p class="mb-2"><strong>6. When you come to the office on the appointment date, ensure that:</strong></p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li class="text-base">You have the appointment paper with you.</li>
        <li class="text-base">You have all the original required documents with you. These should match the documents you uploaded during the Online Application.</li>
      </ul>
      <p class="mb-4">If you are applying as an applicant, you must attend in person. Proxy applications are not allowed. If you are applying as a guardian or parent, you must accompany the child/toddler.</p>
    </div>
  `,
    am: `
    <div class="mt-4">
      <p class="text-lg font-medium mb-2">አዲስ ፓስፖርት አመልካቾች የሚከተሉትን መስፈርቶች ማሟላት አለባቸው፡</p>
      <p class="mb-4"><strong>1. ለዚህ አገልግሎት የሚያስፈልጉ ሰነዶችን ያዘጋጁ፡</strong></p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li class="text-base">ዋጋ ያለው የቀበሌ መታወቂያ።</li>
        <li class="text-base">የተረጋገጠ የልደት ሰርተፍኬት።</li>
      </ul>
      <p class="mb-2"><strong>2. ለአዲስ ፓስፖርት የአገልግሎት ክፍያውን ይመልከቱ፡</strong></p>
      <table class="border-collapse border border-gray-300 mt-2 w-full">
        <thead>
          <tr class="bg-gray-700 text-white">
            <th class="border border-gray-300 p-2">የፓስፖርት አይነት</th>
            <th class="border border-gray-300 p-2">ዋጋ (ብር)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="border border-gray-300 p-2">አዲስ</td>
            <td class="border border-gray-300 p-2">5000</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-4 mb-2"><strong>3. ሁሉንም የሚያስፈልጉ ሰነዶች ስካን ያድርጉ እና በመመሪያዎቹ መሰረት መጠናቸውን ያስተካክሉ።</strong></p>
      <p class="mb-4">4. ክፍያው የሚፈጸመው የማመልከቻ ቅጹን ካስገቡ በኋላ በሚመነጨው የክፍያ ኮድ በመጠቀም በኦንላይን መድረኮች ወይም በባንኮች ነው።</p>
      <p class="mb-2">5. ለአገልግሎቱ ካመለከቱ በኋላ፣ የቀጠሮዎን እና የማድረሻ ቀን እና ሰዓት የያዘውን የመጨረሻ ገጽ ማተም አለብዎት። የታተመውን ወረቀት ከእርስዎ ጋር ወደ ቀጠሮዎ ይዘው ይምጡ።</p>
      <p class="mb-2"><strong>6. በቀጠሮ ቀን ወደ ቢሮው ሲመጡ፣ እርግጠኛ ይሁኑ፡</strong></p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li class="text-base">የቀጠሮ ወረቀቱ ከእርስዎ ጋር አለ።</li>
        <li class="text-base">ሁሉም ኦሪጅናል የሚያስፈልጉ ሰነዶች ከእርስዎ ጋር አሉ። እነዚህ በኦንላይን ማመልከቻ ወቅት ካስገቧቸው ሰነዶች ጋር መዛመድ አለባቸው።</li>
      </ul>
      <p class="mb-4">እንደ አመልካች ከሆነ በአካል መገኘት አለብዎት። በወኪል ማመልከቻዎች አይፈቀዱም። እንደ አሳዳጊ ወይም ወላጅ ከሆነ ከልጁ/ከህጻኑ ጋር መሄድ አለብዎት።</p>
    </div>
  `,
  },
  "expired-passport": {
    en: `
    <div class="mt-4">
      <p class="text-lg font-medium mb-2">For expired passport renewal, applicants must fulfill the following requirements:</p>
      <p class="mb-4"><strong>1. Prepare all the required documents for this service:</strong></p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li class="text-base">Copy of the expired Passport's information page.</li>
      </ul>
      <p class="mb-2"><strong>2. Check the service fee for an expired Passport:</strong></p>
      <table class="border-collapse border border-gray-300 mt-2 w-full">
        <thead>
          <tr class="bg-gray-700 text-white">
            <th class="border border-gray-300 p-2">Passport Type</th>
            <th class="border border-gray-300 p-2">Price (ETB)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="border border-gray-300 p-2">Expired</td>
            <td class="border border-gray-300 p-2">5000</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-4 mb-2"><strong>3. Scan all the required documents and resize them according to the guidelines.</strong></p>
      <p class="mb-4">4. Payment will be through online platforms or banks using the payment code generated after submitting the application form.</p>
    </div>
  `,
    am: `
    <div class="mt-4">
      <p class="text-lg font-medium mb-2">ለተበላሸ ፓስፖርት እድሳት፣ አመልካቾች የሚከተሉትን መስፈርቶች ማሟላት አለባቸው፡</p>
      <p class="mb-4"><strong>1. ለዚህ አገልግሎት የሚያስፈልጉ ሰነዶችን ያዘጋጁ፡</strong></p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li class="text-base">የተበላሸው ፓስፖርት መረጃ ገጽ ቅጂ።</li>
      </ul>
      <p class="mb-2"><strong>2. ለተበላሸ ፓስፖርት የአገልግሎት ክፍያውን ይመልከቱ፡</strong></p>
      <table class="border-collapse border border-gray-300 mt-2 w-full">
        <thead>
          <tr class="bg-gray-700 text-white">
            <th class="border border-gray-300 p-2">የፓስፖርት አይነት</th>
            <th class="border border-gray-300 p-2">ዋጋ (ብር)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="border border-gray-300 p-2">የተበላሸ</td>
            <td class="border border-gray-300 p-2">5000</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-4 mb-2"><strong>3. ሁሉንም የሚያስፈልጉ ሰነዶች ስካን ያድርጉ እና በመመሪያዎቹ መሰረት መጠናቸውን ያስተካክሉ።</strong></p>
      <p class="mb-4">4. ክፍያው የሚፈጸመው የማመልከቻ ቅጹን ካስገቡ በኋላ በሚመነጨው የክፍያ ኮድ በመጠቀም በኦንላይን መድረኮች ወይም በባንኮች ነው።</p>
    </div>
  `,
  },
  "passport-page-runout": {
    en: `
  <div class="mt-4">
    <p class="text-lg font-medium mb-2">Applicants for passport pages running out must fulfill the following requirements:</p>
    <p class="mb-4"><strong>1. Prepare all the required documents for this service:</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">Copy of the Passport’s information page.</li>
    </ul>
    <p class="mb-2"><strong>2. Check the service fee for passport pages running out:</strong></p>
    <table class="border-collapse border border-gray-300 mt-2 w-full">
      <thead>
        <tr class="bg-gray-700 text-white">
          <th class="border border-gray-300 p-2">Passport Type</th>
          <th class="border border-gray-300 p-2">Price (ETB)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">Page Run Out</td>
          <td class="border border-gray-300 p-2">5000</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-4 mb-2"><strong>3. Scan all the required documents and resize them according to the guidelines.</strong></p>
    <p class="mb-4">4. Payment will be through online platforms or banks using the payment code generated after submitting the application form.</p>
    <p class="mb-2">5. After you apply for the service, you must print the last page, which contains your appointment and delivery date and time. Bring the printed paper with you to your appointment.</p>
    <p class="mb-2"><strong>6. When you come to the office on the appointment date, ensure that:</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">You have the appointment paper with you.</li>
      <li class="text-base">You have all the original required documents with you. These should match the documents you uploaded during the Online Application.</li>
    </ul>
    <p class="mb-4">If you are applying as an applicant, you must attend in person. Proxy applications are not allowed. If you are applying as a guardian or parent, you must accompany the child/toddler.</p>
  </div>
  `,
    am: `
  <div class="mt-4">
    <p class="text-lg font-medium mb-2">የፓስፖርት ገጽ ያለምንድን አመልካቾች የሚከተሉትን መስፈርቶች ማሟላት አለባቸው፡</p>
    <p class="mb-4"><strong>1. ለዚህ አገልግሎት የሚያስፈልጉ ሰነዶችን ያዘጋጁ፡</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">የፓስፖርት መረጃ ገጽ ቅጂ።</li>
    </ul>
    <p class="mb-2"><strong>2. ለፓስፖርት ገጽ ያለምንድን የአገልግሎት ክፍያውን ይመልከቱ፡</strong></p>
    <table class="border-collapse border border-gray-300 mt-2 w-full">
      <thead>
        <tr class="bg-gray-700 text-white">
          <th class="border border-gray-300 p-2">የፓስፖርት አይነት</th>
          <th class="border border-gray-300 p-2">ዋጋ (ብር)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">ገጽ ያለምንድን</td>
          <td class="border border-gray-300 p-2">5000</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-4 mb-2"><strong>3. ሁሉንም የሚያስፈልጉ ሰነዶች ስካን ያድርጉ እና በመመሪያዎቹ መሰረት መጠናቸውን ያስተካክሉ።</strong></p>
    <p class="mb-4">4. ክፍያው የሚፈጸመው በኦንላይን መድረኮች ወይም በባንኮች በማመልከቻ ቅጥ ከተላከ በኋላ የሚመነጨውን የክፍያ ኮድ በመጠቀም ነው።</p>
    <p class="mb-2">5. ለአገልግሎቱ ካመለከቱ በኋላ፣ የቀጠሮዎን እና የማድረሻ ቀን እና ሰዓት የያዘውን የመጨረሻ ገጽ ማተም አለብዎት። የታተመውን ወረቀት ከእርስዎ ጋር ወደ ቀጠሮዎ ይዘው ይምጡ።</p>
    <p class="mb-2"><strong>6. በቀጠሮ ቀን ወደ ቢሮው ሲመጡ፣ እርግጠኛ ይሁኑ፡</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">የቀጠሮ ወረቀቱ ከእርስዎ ጋር አለ።</li>
      <li class="text-base">ሁሉም ኦሪጅናል የሚያስፈልጉ ሰነዶች ከእርስዎ ጋር አሉ። እነዚህ በኦንላይን ማመልከቻ ወቅት ካስገቡት ሰነዶች ጋር መዛመድ አለባቸው።</li>
    </ul>
    <p class="mb-4">እንደ አመልካች ከሆነ በአካል መገኘት አለብዎት። በወኪል ማመልከቻዎች አይፈቀዱም። እንደ አሳዳጊ ወይም ወላጅ ከሆነ ከልጁ/ከህጻኑ ጋር መሄድ አለብዎት።</p>
  </div>
  `,
  },
  "damaged-passport": {
    en: `
  <div class="mt-4">
    <p class="text-lg font-medium mb-2">For applicants of damaged passport must fulfil the following requirements. If your passport is damaged through different reasons:</p>
    <p class="mb-4"><strong>1. Prepare all the required documents for this service:</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">Copy of the Passport's information page or any page of the passport which have the passport number and valid Kebele Identity card.</li>
    </ul>
    <p class="mb-2"><strong>2. Check the service fee for the damaged Passport:</strong></p>
    <table class="border-collapse border border-gray-300 mt-2 w-full">
      <thead>
        <tr class="bg-gray-700 text-white">
          <th class="border border-gray-300 p-2">Passport Status</th>
          <th class="border border-gray-300 p-2">Price (ETB)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">Expired and Damage</td>
          <td class="border border-gray-300 p-2">13000</td>
        </tr>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">Valid and Damage</td>
          <td class="border border-gray-300 p-2">13000</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-4 mb-2"><strong>3. Scan all the required documents and resize them according to the guidelines.</strong></p>
    <p class="mb-4">4. Payment will be through online platforms or banks using the payment code generated after submitting the application form.</p>
    <p class="mb-2">5. After you apply for the service, you must print the last page, which contains your appointment and delivery date and time. Bring the printed paper with you to your appointment.</p>
    <p class="mb-2"><strong>6. When you come to the office on the appointment date, ensure that:</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">You have the appointment paper with you.</li>
      <li class="text-base">You have all the original required documents with you. These should match the documents you uploaded during the Online Application.</li>
    </ul>
    <p class="mb-4">If you are applying as an applicant, you must attend in person. Proxy applications are not allowed. If you are applying as a guardian or parent, you must accompany the child/toddler.</p>
  </div>
  `,
    am: `
  <div class="mt-4">
    <p class="text-lg font-medium mb-2">የተበላሸ ፓስፖርት አመልካቾች የሚከተሉትን መስፈርቶች ማሟላት አለባቸው። ፓስፖርትዎ በተለያዩ ምክንያቶች የተበላሸ ከሆነ:</p>
    <p class="mb-4"><strong>1. ለዚህ አገልግሎት የሚያስፈልጉ ሰነዶችን ያዘጋጁ፡</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">የፓስፖርት መረጃ ገጽ ቅጂ ወይም የፓስፖርት ቁጥር ያለበት ማንኛውም የፓስፖርት ገጽ እና ዋጋ ያለው የቀበሌ መታወቂያ ካርድ።</li>
    </ul>
    <p class="mb-2"><strong>2. ለተበላሸ ፓስፖርት የአገልግሎት ክፍያውን ይመልከቱ፡</strong></p>
    <table class="border-collapse border border-gray-300 mt-2 w-full">
      <thead>
        <tr class="bg-gray-700 text-white">
          <th class="border border-gray-300 p-2">የፓስፖርት ሁኔታ</th>
          <th class="border border-gray-300 p-2">ዋጋ (ብር)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">የተበላሸ እና ጊዜው ያለፈበት</td>
          <td class="border border-gray-300 p-2">13000</td>
        </tr>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">የተበላሸ እና ዋጋ ያለው</td>
          <td class="border border-gray-300 p-2">13000</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-4 mb-2"><strong>3. ሁሉንም የሚያስፈልጉ ሰነዶች ስካን ያድርጉ እና በመመሪያዎቹ መሰረት መጠናቸውን ያስተካክሉ።</strong></p>
    <p class="mb-4">4. ክፍያው የሚፈጸመው የማመልከቻ ቅጹን ካስገቡ በኋላ በሚመነጨው የክፍያ ኮድ በመጠቀም በኦንላይን መድረኮች ወይም በባንኮች ነው።</p>
    <p class="mb-2">5. ለአገልግሎቱ ካመለከቱ በኋላ፣ የቀጠሮዎን እና የማድረሻ ቀን እና ሰዓት የያዘውን የመጨረሻ ገጽ ማተም አለብዎት። የታተመውን ወረቀት ከእርስዎ ጋር ወደ ቀጠሮዎ ይዘው ይምጡ።</p>
    <p class="mb-2"><strong>6. በቀጠሮ ቀን ወደ ቢሮው ሲመጡ፣ እርግጠኛ ይሁኑ፡</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">የቀጠሮ ወረቀቱ ከእርስዎ ጋር አለ።</li>
      <li class="text-base">ሁሉም ኦሪጅናል የሚያስፈልጉ ሰነዶች ከእርስዎ ጋር አሉ። እነዚህ በኦንላይን ማመልከቻ ወቅት ካስገቡት ሰነዶች ጋር መዛመድ አለባቸው።</li>
    </ul>
    <p class="mb-4">እንደ አመልካች ከሆነ በአካል መገኘት አለብዎት። በወኪል ማመልከቻዎች አይፈቀዱም። እንደ አሳዳጊ ወይም ወላጅ ከሆነ ከልጁ/ከህጻኑ ጋር መሄድ አለብዎት።</p>
  </div>
  `,
  },
  "lost-passport": {
    en: `
  <div class="mt-4">
    <p class="text-lg font-medium mb-2">For applicants of Lost/Stolen passport must fulfil the following requirements:</p>
    <p class="mb-4"><strong>1. Prepare all the required documents for this service:</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">Valid Kebele identity card.</li>
      <li class="text-base">Police evidence letter.</li>
      <li class="text-base">Copy of passport or information about the passport if you have.</li>
    </ul>
    <p class="mb-2"><strong>2. Check the service fee for the Lost/Stolen Passport:</strong></p>
    <table class="border-collapse border border-gray-300 mt-2 w-full">
      <thead>
        <tr class="bg-gray-700 text-white">
          <th class="border border-gray-300 p-2">Passport Status</th>
          <th class="border border-gray-300 p-2">Price (ETB)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">Lost Passport</td>
          <td class="border border-gray-300 p-2">13000</td>
        </tr>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">Lost with Correction</td>
          <td class="border border-gray-300 p-2">20500</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-4 mb-2"><strong>3. Scan all the required documents and resize them according to the guidelines.</strong></p>
    <p class="mb-4">4. Payment will be through online platforms or banks using the payment code generated after submitting the application form.</p>
    <p class="mb-2">5. After you apply for the service, you must print the last page, which contains your appointment and delivery date and time. Bring the printed paper with you to your appointment.</p>
    <p class="mb-2"><strong>6. When you come to the office on the appointment date, ensure that:</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">You have the appointment paper with you.</li>
      <li class="text-base">You have all the original required documents with you. These should match the documents you uploaded during the Online Application.</li>
    </ul>
    <p class="mb-4">If you are applying as an applicant, you must attend in person. Proxy applications are not allowed. If you are applying as a guardian or parent, you must accompany the child/toddler.</p>
  </div>
  `,
    am: `
  <div class="mt-4">
    <p class="text-lg font-medium mb-2">የጠፋ/የተሰረቀ ፓስፖርት አመልካቾች የሚከተሉትን መስፈርቶች ማሟላት አለባቸው:</p>
    <p class="mb-4"><strong>1. ለዚህ አገልግሎት የሚያስፈልጉ ሰነዶችን ያዘጋጁ፡</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">ዋጋ ያለው የቀበሌ መታወቂያ ካርድ።</li>
      <li class="text-base">የፖሊስ ማስረጃ ደብዳቤ።</li>
      <li class="text-base">የፓስፖርት ቅጂ ወይም ስለ ፓስፖርቱ መረጃ ካለዎት።</li>
    </ul>
    <p class="mb-2"><strong>2. ለጠፋ/ለተሰረቀ ፓስፖርት የአገልግሎት ክፍያውን ይመልከቱ፡</strong></p>
    <table class="border-collapse border border-gray-300 mt-2 w-full">
      <thead>
        <tr class="bg-gray-700 text-white">
          <th class="border border-gray-300 p-2">የፓስፖርት ሁኔታ</th>
          <th class="border border-gray-300 p-2">ዋጋ (ብር)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">የጠፋ ፓስፖርት</td>
          <td class="border border-gray-300 p-2">13000</td>
        </tr>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">የጠፋ ከማስተካከያ ጋር</td>
          <td class="border border-gray-300 p-2">20500</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-4 mb-2"><strong>3. ሁሉንም የሚያስፈልጉ ሰነዶች ስካን ያድርጉ እና በመመሪያዎቹ መሰረት መጠናቸውን ያስተካክሉ።</strong></p>
    <p class="mb-4">4. ክፍያው የሚፈጸመው የማመልከቻ ቅጹን ካስገቡ በኋላ በሚመነጨው የክፍያ ኮድ በመጠቀም በኦንላይን መድረኮች ወይም በባንኮች ነው።</p>
    <p class="mb-2">5. ለአገልግሎቱ ካመለከቱ በኋላ፣ የቀጠሮዎን እና የማድረሻ ቀን እና ሰዓት የያዘውን የመጨረሻ ገጽ ማተም አለብዎት። የታተመውን ወረቀት ከእርስዎ ጋር ወደ ቀጠሮዎ ይዘው ይምጡ።</p>
    <p class="mb-2"><strong>6. በቀጠሮ ቀን ወደ ቢሮው ሲመጡ፣ እርግጠኛ ይሁኑ፡</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">የቀጠሮ ወረቀቱ ከእርስዎ ጋር አለ።</li>
      <li class="text-base">ሁሉም ኦሪጅናል የሚያስፈልጉ ሰነዶች ከእርስዎ ጋር አሉ። እነዚህ በኦንላይን ማመልከቻ ወቅት ካስገቡት ሰነዶች ጋር መዛመድ አለባቸው።</li>
    </ul>
    <p class="mb-4">እንደ አመልካች ከሆነ በአካል መገኘት አለብዎት። በወኪል ማመልከቻዎች አይፈቀዱም። እንደ አሳዳጊ ወይም ወላጅ ከሆነ ከልጁ/ከህጻኑ ጋር መሄድ አለብዎት።</p>
  </div>
  `,
  },
  "change-passport-data": {
    en: `
  <div class="mt-4">
    <p class="text-lg font-medium mb-2">Applicants for change of passport data must fulfil the following requirements. If you need to change the passport information like name change, birth place and birth date:</p>
    <p class="mb-4"><strong>1. Prepare all the required documents for this service:</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">Copy of passport information page.</li>
      <li class="text-base">Court evidence letter.</li>
    </ul>
    <p class="mb-2"><strong>2. Check the service fee for change of Passport data:</strong></p>
    <table class="border-collapse border border-gray-300 mt-2 w-full">
      <thead>
        <tr class="bg-gray-700 text-white">
          <th class="border border-gray-300 p-2">Passport Status</th>
          <th class="border border-gray-300 p-2">Price (ETB)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">Correction</td>
          <td class="border border-gray-300 p-2">12500</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-4 mb-2"><strong>3. Scan all the required documents and resize them according to the guidelines.</strong></p>
    <p class="mb-4">4. Payment will be through online platforms or banks using the payment code generated after submitting the application form.</p>
    <p class="mb-2">5. After you apply for the service, you must print the last page, which contains your appointment and delivery date and time. Bring the printed paper with you to your appointment.</p>
    <p class="mb-2"><strong>6. When you come to the office on the appointment date, ensure that:</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">You have the appointment paper with you.</li>
      <li class="text-base">You have all the original required documents with you. These should match the documents you uploaded during the Online Application.</li>
    </ul>
    <p class="mb-4">If you are applying as an applicant, you must attend in person. Proxy applications are not allowed. If you are applying as a guardian or parent, you must accompany the child/toddler.</p>
  </div>
  `,
    am: `
  <div class="mt-4">
    <p class="text-lg font-medium mb-2">የፓስፖርት መረጃ ለመቀየር አመልካቾች የሚከተሉትን መስፈርቶች ማሟላት አለባቸው። የስም ለውጥ፣ የትውልድ ቦታ እና የትውልድ ቀን ያሉ የፓስፖርት መረጃዎችን መቀየር ከፈለጉ:</p>
    <p class="mb-4"><strong>1. ለዚህ አገልግሎት የሚያስፈልጉ ሰነዶችን ያዘጋጁ፡</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">የፓስፖርት መረጃ ገጽ ቅጂ።</li>
      <li class="text-base">የፍርድ ቤት ማስረጃ ደብዳቤ።</li>
    </ul>
    <p class="mb-2"><strong>2. ለፓስፖርት መረጃ ለውጥ የአገልግሎት ክፍያውን ይመልከቱ፡</strong></p>
    <table class="border-collapse border border-gray-300 mt-2 w-full">
      <thead>
        <tr class="bg-gray-700 text-white">
          <th class="border border-gray-300 p-2">የፓስፖርት ሁኔታ</th>
          <th class="border border-gray-300 p-2">ዋጋ (ብር)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border border-gray-300 p-2">ማስተካከያ</td>
          <td class="border border-gray-300 p-2">12500</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-4 mb-2"><strong>3. ሁሉንም የሚያስፈልጉ ሰነዶች ስካን ያድርጉ እና በመመሪያዎቹ መሰረት መጠናቸውን ያስተካክሉ።</strong></p>
    <p class="mb-4">4. ክፍያው የሚፈጸመው የማመልከቻ ቅጹን ካስገቡ በኋላ በሚመነጨው የክፍያ ኮድ በመጠቀም በኦንላይን መድረኮች ወይም በባንኮች ነው።</p>
    <p class="mb-2">5. ለአገልግሎቱ ካመለከቱ በኋላ፣ የቀጠሮዎን እና የማድረሻ ቀን እና ሰዓት የያዘውን የመጨረሻ ገጽ ማተም አለብዎት። የታተመውን ወረቀት ከእርስዎ ጋር ወደ ቀጠሮዎ ይዘው ይምጡ።</p>
    <p class="mb-2"><strong>6. በቀጠሮ ቀን ወደ ቢሮው ሲመጡ፣ እርግጠኛ ይሁኑ፡</strong></p>
    <ul class="list-disc pl-6 mb-4 space-y-1">
      <li class="text-base">የቀጠሮ ወረቀቱ ከእርስዎ ጋር አለ።</li>
      <li class="text-base">ሁሉም ኦሪጅናል የሚያስፈልጉ ሰነዶች ከእርስዎ ጋር አሉ። እነዚህ በኦንላይን ማመልከቻ ወቅት ካስገቡት ሰነዶች ጋር መዛመድ አለባቸው።</li>
    </ul>
    <p class="mb-4">እንደ አመልካች ከሆነ በአካል መገኘት አለብዎት። በወኪል ማመልከቻዎች አይፈቀዱም። እንደ አሳዳጊ ወይም ወላጅ ከሆነ ከልጁ/ከህጻኑ ጋር መሄድ አለብዎት።</p>
  </div>
  `,
  },

  "new-sim-card": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">To apply for a new SIM card, follow these steps:</p>
        <p class="mb-4"><strong>Requirements:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Valid Kebele Identity card.</li>
          <li class="text-base">Passport-sized photograph.</li>
        </ul>
        <p class="mb-2"><strong>Procedure:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit the nearest Ethio Telecom office.</li>
          <li class="text-base">Submit your identity card and photograph.</li>
          <li class="text-base">Pay the SIM card fee.</li>
        </ol>
        <p class="mb-4"><strong>Tips:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Choose a plan that suits your needs.</li>
          <li class="text-base">Activate your SIM card immediately after purchase.</li>
        </ul>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">አዲስ ሲም ካርድ ለማመልከት፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>መስፈርቶች፡</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">ዋጋ ያለው የቀበሌ መታወቂያ።</li>
          <li class="text-base">የፓስፖርት መጠን ያለው ፎቶግራፍ።</li>
        </ul>
        <p class="mb-2"><strong>አሰራር፡</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">አቅራቢያዎ ወደሚገኘው የኢትዮ ቴሌኮም ቢሮ ይሂዱ።</li>
          <li class="text-base">መታወቂያዎን እና ፎቶግራፍዎን ያስገቡ።</li>
          <li class="text-base">የሲም ካርድ ክፍያ ይክፈሉ።</li>
        </ol>
        <p class="mb-4"><strong>ምክሮች፡</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">ለፍላጎትዎ የሚስማማ እቅድ ይምረጡ።</li>
          <li class="text-base">ሲም ካርድዎን ከገዙ በኋላ ወዲያውኑ ያግብሩ።</li>
        </ul>
      </div>
    `,
  },
  "new-internet-service": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">To apply for a new internet service, follow these steps:</p>
        <p class="mb-4"><strong>Requirements:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Valid ID card.</li>
          <li class="text-base">Proof of residence (utility bill or lease agreement).</li>
          <li class="text-base">Contact information.</li>
        </ul>
        <p class="mb-2"><strong>Procedure:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit the nearest Ethio Telecom service center.</li>
          <li class="text-base">Fill out the application form for internet service.</li>
          <li class="text-base">Submit all required documents.</li>
          <li class="text-base">Pay the installation fee.</li>
          <li class="text-base">Schedule an installation appointment.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">አዲስ የኢንተርኔት አገልግሎት ለማመልከት፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>መስፈርቶች፡</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">ዋጋ ያለው መታወቂያ ካርድ።</li>
          <li class="text-base">የመኖሪያ ማረጋገጫ (የውሃ/የኤሌክትሪክ ክፍያ ደረሰኝ ወይም የኪራይ ውል)።</li>
          <li class="text-base">የመገኛ መረጃ።</li>
        </ul>
        <p class="mb-2"><strong>አሰራር፡</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">አቅራቢያዎ ወደሚገኘው የኢትዮ ቴሌኮም አገልግሎት ማዕከል ይሂዱ።</li>
          <li class="text-base">ለኢንተርኔት አገልግሎት የማመልከቻ ቅጹን ይሙሉ።</li>
          <li class="text-base">ሁሉንም የሚያስፈልጉ ሰነዶች ያስገቡ።</li>
          <li class="text-base">የመጫኛ ክፍያ ይክፈሉ።</li>
          <li class="text-base">የመጫኛ ቀጠሮ ይያዙ።</li>
        </ol>
      </div>
    `,
  },
  "buy-telecom-share": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">To buy Ethio Telecom shares, follow these steps:</p>
        <p class="mb-4"><strong>Requirements:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Valid ID card or passport.</li>
          <li class="text-base">Bank account.</li>
          <li class="text-base">Minimum investment amount.</li>
        </ul>
        <p class="mb-2"><strong>Procedure:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit an authorized bank or financial institution.</li>
          <li class="text-base">Fill out the share purchase application form.</li>
          <li class="text-base">Submit required identification documents.</li>
          <li class="text-base">Make payment for the desired number of shares.</li>
          <li class="text-base">Receive share certificate or digital confirmation.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">የኢትዮ ቴሌኮም አክሲዮኖችን ለመግዛት፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>መስፈርቶች፡</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">ዋጋ ያለው መታወቂያ ካርድ ወይም ፓስፖርት።</li>
          <li class="text-base">የባንክ ሂሳብ።</li>
          <li class="text-base">ዝቅተኛ የኢንቨስትመንት መጠን።</li>
        </ul>
        <p class="mb-2"><strong>አሰራር፡</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">ፈቃድ ወደተሰጠው ባንክ ወይም የፋይናንስ ተቋም ይሂዱ።</li>
          <li class="text-base">የአክሲዮን ግዢ ማመልከቻ ቅጹን ይሙሉ።</li>
          <li class="text-base">የሚያስፈልጉ የመታወቂያ ሰነዶችን ያስገቡ።</li>
          <li class="text-base">ለሚፈልጉት የአክሲዮን ብዛት ክፍያ ይፈጽሙ።</li>
          <li class="text-base">የአክሲዮን ሰርተፊኬት ወይም ዲጂታል ማረጋገጫ ይቀበሉ።</li>
        </ol>
      </div>
    `,
  },
  "birth-certificate": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">For birth certificate, you must fulfill the following requirements:</p>
        <p class="mb-4"><strong>1. Required documents:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Valid Kebele Identity card.</li>
          <li class="text-base">Hospital birth record (if available).</li>
          <li class="text-base">Parents' ID cards.</li>
        </ul>
        <p class="mb-2"><strong>2. Procedure:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit your local Wesag Kunet office.</li>
          <li class="text-base">Fill out the application form.</li>
          <li class="text-base">Pay the required fee.</li>
          <li class="text-base">Return to collect your certificate on the specified date.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">ለልደት ምስክር ወረቀት፣ የሚከተሉትን መስፈርቶች ማሟላት አለብዎት፡</p>
        <p class="mb-4"><strong>1. የሚያስፈልጉ ሰነዶች፡</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">ዋጋ ያለው የቀበሌ መታወቂያ።</li>
          <li class="text-base">የሆስፒታል የልደት መዝገብ (ካለ)።</li>
          <li class="text-base">የወላጆች መታወቂያ ካርዶች።</li>
        </ul>
        <p class="mb-2"><strong>2. አሰራር፡</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">አካባቢዎ ወደሚገኘው የወሳኝ ኩነት ቢሮ ይሂዱ።</li>
          <li class="text-base">የማመልከቻ ቅጹን ይሙሉ።</li>
          <li class="text-base">የሚያስፈልገውን ክፍያ ይክፈሉ።</li>
          <li class="text-base">በተገለጸው ቀን ምስክር ወረቀትዎን ለመውሰድ ይመለሱ።</li>
        </ol>
      </div>
    `,
  },
  "non-marital-certificate": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">For a non-marital certificate, follow these steps:</p>
        <p class="mb-4"><strong>Required documents:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Valid ID card.</li>
          <li class="text-base">Passport-sized photograph.</li>
          <li class="text-base">Application form.</li>
        </ul>
        <p class="mb-2"><strong>Procedure:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit your local Wesag Kunet office.</li>
          <li class="text-base">Complete the application form.</li>
          <li class="text-base">Pay the required fee.</li>
          <li class="text-base">Provide fingerprints if required.</li>
          <li class="text-base">Return to collect your certificate on the specified date.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">ለያገባ/ያላገባ ምስክር ወረቀት፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>የሚያስፈልጉ ሰነዶች፡</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">ዋጋ ያለው መታወቂያ ካርድ።</li>
          <li class="text-base">የፓስፖርት መጠን ያለው ፎቶግራፍ።</li>
          <li class="text-base">የማመልከቻ ቅጽ።</li>
        </ul>
        <p class="mb-2"><strong>አሰራር፡</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">አካባቢዎ ወደሚገኘው የወሳኝ ኩነት ቢሮ ይሂዱ።</li>
          <li class="text-base">የማመልከቻ ቅጹን ያጠናቅቁ።</li>
          <li class="text-base">የሚያስፈልገውን ክፍያ ይክፈሉ።</li>
          <li class="text-base">ካስፈለገ የጣት አሻራ ይስጡ።</li>
          <li class="text-base">በተገለጸው ቀን ምስክር ወረቀትዎን ለመውሰድ ይመለሱ።</li>
        </ol>
      </div>
    `,
  },
  vat: {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">To register for Value Added Tax (VAT), follow these requirements:</p>
        <p class="mb-4"><strong>Required documents:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Business license.</li>
          <li class="text-base">TIN certificate.</li>
          <li class="text-base">Bank statement.</li>
          <li class="text-base">Business registration documents.</li>
        </ul>
        <p class="mb-2"><strong>Process:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit the Gebiwoche office.</li>
          <li class="text-base">Complete the VAT registration form.</li>
          <li class="text-base">Submit all required documents.</li>
          <li class="text-base">Pay the registration fee.</li>
          <li class="text-base">Attend the VAT training session if required.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">ለተጨማሪ እሴት ታክስ (VAT) ለመመዝገብ፣ እነዚህን መስፈርቶች ይከተሉ:</p>
        <p class="mb-4"><strong>የሚያስፈልጉ ሰነዶች:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">የንግድ ፍቃድ።</li>
          <li class="text-base">የቲን ሰርተፊኬት።</li>
          <li class="text-base">የባንክ መግለጫ።</li>
          <li class="text-base">የንግድ ምዝገባ ሰነዶች።</li>
        </ul>
        <p class="mb-2"><strong>ሂደት:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">ወደ ገቢዎች ቢሮ ይሂዱ።</li>
          <li class="text-base">የVAT ምዝገባ ቅጹን ያጠናቅቁ።</li>
          <li class="text-base">ሁሉንም የሚያስፈልጉ ሰነዶች ያስገቡ።</li>
          <li class="text-base">የምዝገባ ክፍያ ይክፈሉ።</li>
          <li class="text-base">የVAT ስልጠና ክፍለ ጊዜ ካስፈለገ ይሳተፉ።</li>
        </ol>
      </div>
    `,
  },
  "tax-issues": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">For tax-related issues and inquiries, follow these steps:</p>
        <p class="mb-4"><strong>Common tax issues:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Tax filing errors.</li>
          <li class="text-base">Payment discrepancies.</li>
          <li class="text-base">Tax assessment disputes.</li>
          <li class="text-base">Tax clearance certificates.</li>
        </ul>
        <p class="mb-2"><strong>Resolution process:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit your local Gebiwoche office.</li>
          <li class="text-base">Bring all relevant documentation.</li>
          <li class="text-base">Complete the appropriate forms for your issue.</li>
          <li class="text-base">Meet with a tax officer for assessment.</li>
          <li class="text-base">Follow the recommended resolution steps.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">ከታክስ ጋር ለተያያዙ ጉዳዮች እና ጥያቄዎች፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>የተለመዱ የታክስ ጉዳዮች:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">የታክስ ማስገቢያ ስህተቶች።</li>
          <li class="text-base">የክፍያ ልዩነቶች።</li>
          <li class="text-base">የታክስ ግምገማ ክርክሮች።</li>
          <li class="text-base">የታክስ ክሊራንስ ሰርተፊኬቶች።</li>
        </ul>
        <p class="mb-2"><strong>የመፍትሄ ሂደት:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">አካባቢዎ ወደሚገኘው የገቢዎች ቢሮ ይሂዱ።</li>
          <li class="text-base">ሁሉንም አግባብነት ያላቸውን ሰነዶች ይዘው ይምጡ።</li>
          <li class="text-base">ለጉዳይዎ ተገቢውን ቅጽ ያጠናቅቁ።</li>
          <li class="text-base">ለግምገማ ከታክስ ባለሙያ ጋር ይገናኙ።</li>
          <li class="text-base">የተመከሩትን የመፍትሄ ደረጃዎች ይከተሉ።</li>
        </ol>
      </div>
    `,
  },
  "tin-number": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">To obtain a Tax Identification Number (TIN), follow these steps:</p>
        <p class="mb-4"><strong>Required documents:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Valid ID card or passport.</li>
          <li class="text-base">Recent passport-sized photograph.</li>
          <li class="text-base">Business registration documents (for businesses).</li>
          <li class="text-base">Proof of address (utility bill or lease agreement).</li>
        </ul>
        <p class="mb-2"><strong>Application process:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit the Ethiopian Communication Commission office.</li>
          <li class="text-base">Complete the TIN application form.</li>
          <li class="text-base">Submit all required documents.</li>
          <li class="text-base">Have your photograph taken at the office (if needed).</li>
          <li class="text-base">Receive your TIN certificate.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">የታክስ መለያ ቁጥር (TIN) ለማግኘት፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>የሚያስፈልጉ ሰነዶች:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">ዋጋ ያለው መታወቂያ ካርድ ወይም ፓስፖርት።</li>
          <li class="text-base">የቅርብ ጊዜ የፓስፖርት መጠን ያለው ፎቶግራፍ።</li>
          <li class="text-base">የንግድ ምዝገባ ሰነዶች (ለንግዶች)።</li>
          <li class="text-base">የአድራሻ ማረጋገጫ (የውሃ/የኤሌክትሪክ ክፍያ ደረሰኝ ወይም የኪራይ ውል)።</li>
        </ul>
        <p class="mb-2"><strong>የማመልከቻ ሂደት:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">ወደ ኢትዮጵያ ኮሙኒኬሽን ኮሚሽን ቢሮ ይሂዱ።</li>
          <li class="text-base">የTIN ማመልከቻ ቅጹን ያጠናቅቁ።</li>
          <li class="text-base">ሁሉንም የሚያስፈልጉ ሰነዶች ያስገቡ።</li>
          <li class="text-base">በቢሮው ፎቶግራፍዎን ያስነሱ (ካስፈለገ)።</li>
          <li class="text-base">የTIN ሰርተፊኬትዎን ይቀበሉ።</li>
        </ol>
      </div>
    `,
  },
  "yenewariwoche-maregagecha": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">For Residents Registration, follow these steps:</p>
        <p class="mb-4"><strong>Required documents:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Valid ID card.</li>
          <li class="text-base">Proof of residence (utility bill or lease agreement).</li>
          <li class="text-base">Passport-sized photographs.</li>
        </ul>
        <p class="mb-2"><strong>Procedure:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit your local Wesag Kunet office.</li>
          <li class="text-base">Complete the registration form.</li>
          <li class="text-base">Submit all required documents.</li>
          <li class="text-base">Pay the registration fee.</li>
          <li class="text-base">Collect your registration certificate.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">ለነዋሪዎች ማረጋገጫ፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>የሚያስፈልጉ ሰነዶች:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">ዋጋ ያለው መታወቂያ ካርድ።</li>
          <li class="text-base">የመኖሪያ ማረጋገጫ (የውሃ/የኤሌክትሪክ ክፍያ ደረሰኝ ወይም የኪራይ ውል)።</li>
          <li class="text-base">የፓስፖርት መጠን ያላቸው ፎቶግራፎች።</li>
        </ul>
        <p class="mb-2"><strong>አሰራር:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">አካባቢዎ ወደሚገኘው የወሳኝ ኩነት ቢሮ ይሂዱ።</li>
          <li class="text-base">የምዝገባ ቅጹን ያጠናቅቁ።</li>
          <li class="text-base">ሁሉንም የሚያስፈልጉ ሰነዶች ያስገቡ።</li>
          <li class="text-base">የምዝገባ ክፍያ ይክፈሉ።</li>
          <li class="text-base">የምዝገባ ሰርተፊኬትዎን ይውሰዱ።</li>
        </ol>
      </div>
    `,
  },

  "wekelena-lemestet": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">For Power of Attorney services, follow these steps:</p>
        <p class="mb-4"><strong>Required documents:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Valid ID card of both parties.</li>
          <li class="text-base">Specific details of the powers being granted.</li>
          <li class="text-base">Any supporting documents related to the property or rights being transferred.</li>
        </ul>
        <p class="mb-2"><strong>Procedure:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit the Welena Masreja office.</li>
          <li class="text-base">Complete the power of attorney form.</li>
          <li class="text-base">Both parties must be present for verification.</li>
          <li class="text-base">Pay the required fee.</li>
          <li class="text-base">Receive the notarized power of attorney document.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">ለውክልና አገልግሎቶች፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>የሚያስፈልጉ ሰነዶች:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">የሁለቱም ወገኖች ዋጋ ያለው መታወቂያ ካርድ።</li>
          <li class="text-base">የሚሰጡት ስልጣኖች ዝርዝር ዝርዝሮች።</li>
          <li class="text-base">ከሚተላለፈው ንብረት ወይም መብቶች ጋር የተያያዙ ማናቸውም ደጋፊ ሰነዶች።</li>
        </ul>
        <p class="mb-2"><strong>አሰራር:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">ወደ ወለና ማስረጃ ቢሮ ይሂዱ።</li>
          <li class="text-base">የውክልና ቅጹን ያጠናቅቁ።</li>
          <li class="text-base">ሁለቱም ወገኖች ለማረጋገጥ መገኘት አለባቸው።</li>
          <li class="text-base">የሚያስፈልገውን ክፍያ ይክፈሉ።</li>
          <li class="text-base">የተረጋገጠውን የውክልና ሰነድ ይቀበሉ።</li>
        </ol>
      </div>
    `,
  },

  "kale-gubaye-lemeyaz": {
    en: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">For Meeting Minutes Registration, follow these steps:</p>
        <p class="mb-4"><strong>Required documents:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">Original meeting minutes document.</li>
          <li class="text-base">Business registration documents.</li>
          <li class="text-base">ID cards of company representatives.</li>
        </ul>
        <p class="mb-2"><strong>Procedure:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">Visit the Welena Masreja office.</li>
          <li class="text-base">Submit the meeting minutes for review.</li>
          <li class="text-base">Complete the registration form.</li>
          <li class="text-base">Pay the registration fee.</li>
          <li class="text-base">Receive the certified meeting minutes document.</li>
        </ol>
      </div>
    `,
    am: `
      <div class="mt-4">
        <p class="text-lg font-medium mb-2">ለቃለ ጉባኤ ምዝገባ፣ እነዚህን ደረጃዎች ይከተሉ:</p>
        <p class="mb-4"><strong>የሚያስፈልጉ ሰነዶች:</strong></p>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li class="text-base">የመጀመሪያው የቃለ ጉባኤ ሰነድ።</li>
          <li class="text-base">የንግድ ምዝገባ ሰነዶች።</li>
          <li class="text-base">የኩባንያ ተወካዮች መታወቂያ ካርዶች።</li>
        </ul>
        <p class="mb-2"><strong>አሰራር:</strong></p>
        <ol class="list-decimal pl-6 mb-4 space-y-1">
          <li class="text-base">ወደ ወለና ማስረጃ ቢሮ ይሂዱ።</li>
          <li class="text-base">ቃለ ጉባኤውን ለግምገማ ያስገቡ።</li>
          <li class="text-base">የምዝገባ ቅጹን ያጠናቅቁ።</li>
          <li class="text-base">የምዝገባ ክፍያ ይክፈሉ።</li>
          <li class="text-base">የተረጋገጠውን የቃለ ጉባኤ ሰነድ ይቀበሉ።</li>
        </ol>
      </div>
    `,
  },
}

