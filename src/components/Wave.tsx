export const Wave = () => {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <style>
        {`
          .path-0 {
            animation: pathAnim-0 8s linear infinite;
          }
          @keyframes pathAnim-0 {
            0% {
              d: path("M 0,500 L 0,0 C 64.40191387559813,56.153110047846894 128.80382775119625,112.30622009569379 237,134 C 345.19617224880375,155.6937799043062 497.1866028708133,142.92822966507177 602,123 C 706.8133971291867,103.07177033492823 764.4497607655503,75.98086124401912 838,99 C 911.5502392344497,122.01913875598088 1001.0143540669856,195.14832535885168 1104,187 C 1206.9856459330144,178.85167464114832 1323.4928229665072,89.42583732057416 1440,0 L 1440,500 L 0,500 Z");
            }
            25% {
              d: path("M 0,500 L 0,0 C 105.17703349282297,46.04784688995215 210.35406698564594,92.0956937799043 304,107 C 397.64593301435406,121.9043062200957 479.76076555023917,105.66507177033495 570,107 C 660.2392344497608,108.33492822966505 758.6028708133971,127.24401913875596 866,137 C 973.3971291866029,146.75598086124404 1089.8277511961724,147.35885167464116 1187,123 C 1284.1722488038276,98.64114832535884 1362.0861244019138,49.32057416267942 1440,0 L 1440,500 L 0,500 Z");
            }
            50% {
              d: path("M 0,500 L 0,0 C 79.77990430622009,47.004784688995215 159.55980861244018,94.00956937799043 270,114 C 380.4401913875598,133.99043062200957 521.5406698564594,126.96650717703352 629,130 C 736.4593301435406,133.03349282296648 810.2775119617224,146.12440191387557 899,156 C 987.7224880382776,165.87559808612443 1091.3492822966507,172.53588516746413 1184,146 C 1276.6507177033493,119.46411483253587 1358.3253588516745,59.732057416267935 1440,0 L 1440,500 L 0,500 Z");
            }
            75% {
              d: path("M 0,500 L 0,0 C 113.22488038277513,62.4688995215311 226.44976076555025,124.9377990430622 315,136 C 403.55023923444975,147.0622009569378 467.42583732057415,106.71770334928227 562,101 C 656.5741626794259,95.28229665071773 781.8468899521531,124.19138755980862 882,153 C 982.1531100478469,181.80861244019138 1057.1866028708134,210.51674641148324 1146,185 C 1234.8133971291866,159.48325358851676 1337.4066985645932,79.74162679425838 1440,0 L 1440,500 L 0,500 Z");
            }
            100% {
              d: path("M 0,500 L 0,0 C 64.40191387559813,56.153110047846894 128.80382775119625,112.30622009569379 237,134 C 345.19617224880375,155.6937799043062 497.1866028708133,142.92822966507177 602,123 C 706.8133971291867,103.07177033492823 764.4497607655503,75.98086124401912 838,99 C 911.5502392344497,122.01913875598088 1001.0143540669856,195.14832535885168 1104,187 C 1206.9856459330144,178.85167464114832 1323.4928229665072,89.42583732057416 1440,0 L 1440,500 L 0,500 Z");
            }
          }
          .path-1 {
            animation: pathAnim-1 8s linear infinite;
          }
          @keyframes pathAnim-1 {
            0% {
              d: path("M 0,500 L 0,0 C 69.87559808612443,141.17703349282297 139.75119617224885,282.35406698564594 246,330 C 352.24880382775115,377.64593301435406 494.87081339712915,331.7607655502392 608,291 C 721.1291866028708,250.23923444976077 804.7655502392345,214.60287081339715 890,242 C 975.2344497607655,269.39712918660285 1062.066985645933,359.82775119617224 1154,330 C 1245.933014354067,300.17224880382776 1342.9665071770335,150.08612440191388 1440,0 L 1440,500 L 0,500 Z");
            }
            25% {
              d: path("M 0,500 L 0,0 C 90.59330143540669,140.62200956937798 181.18660287081337,281.24401913875596 271,334 C 360.8133971291866,386.75598086124404 449.8468899521531,351.64593301435406 533,337 C 616.1531100478469,322.35406698564594 693.425837320574,328.1722488038278 811,331 C 928.574162679426,333.8277511961722 1086.4497607655503,333.665071770335 1198,278 C 1309.5502392344497,222.33492822966505 1374.7751196172248,111.16746411483253 1440,0 L 1440,500 L 0,500 Z");
            }
            50% {
              d: path("M 0,500 L 0,0 C 85.43540669856458,134.1531100478469 170.87081339712915,268.3062200956938 268,318 C 365.12918660287085,367.6937799043062 473.9521531100479,332.92822966507174 568,307 C 662.0478468899521,281.07177033492826 741.3205741626793,263.98086124401914 827,265 C 912.6794258373207,266.01913875598086 1004.7655502392345,285.1483253588517 1108,244 C 1211.2344497607655,202.85167464114832 1325.6172248803828,101.42583732057416 1440,0 L 1440,500 L 0,500 Z");
            }
            75% {
              d: path("M 0,500 L 0,0 C 111.64593301435409,142.61244019138758 223.29186602870817,285.22488038277515 316,323 C 408.70813397129183,360.77511961722485 482.47846889952154,293.7129186602871 567,280 C 651.5215311004785,266.2870813397129 746.7942583732057,305.9234449760766 851,318 C 955.2057416267943,330.0765550239234 1068.3444976076557,314.5933014354067 1168,257 C 1267.6555023923443,199.4066985645933 1353.8277511961721,99.70334928229666 1440,0 L 1440,500 L 0,500 Z");
            }
            100% {
              d: path("M 0,500 L 0,0 C 69.87559808612443,141.17703349282297 139.75119617224885,282.35406698564594 246,330 C 352.24880382775115,377.64593301435406 494.87081339712915,331.7607655502392 608,291 C 721.1291866028708,250.23923444976077 804.7655502392345,214.60287081339715 890,242 C 975.2344497607655,269.39712918660285 1062.066985645933,359.82775119617224 1154,330 C 1245.933014354067,300.17224880382776 1342.9665071770335,150.08612440191388 1440,0 L 1440,500 L 0,500 Z");
            }
          }
        `}
      </style>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#F78DA7"></stop>
          <stop offset="95%" stopColor="#8ED1FC"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,500 L 0,0 C 64.40191387559813,56.153110047846894 128.80382775119625,112.30622009569379 237,134 C 345.19617224880375,155.6937799043062 497.1866028708133,142.92822966507177 602,123 C 706.8133971291867,103.07177033492823 764.4497607655503,75.98086124401912 838,99 C 911.5502392344497,122.01913875598088 1001.0143540669856,195.14832535885168 1104,187 C 1206.9856459330144,178.85167464114832 1323.4928229665072,89.42583732057416 1440,0 L 1440,500 L 0,500 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <path
        d="M 0,500 L 0,0 C 69.87559808612443,141.17703349282297 139.75119617224885,282.35406698564594 246,330 C 352.24880382775115,377.64593301435406 494.87081339712915,331.7607655502392 608,291 C 721.1291866028708,250.23923444976077 804.7655502392345,214.60287081339715 890,242 C 975.2344497607655,269.39712918660285 1062.066985645933,359.82775119617224 1154,330 C 1245.933014354067,300.17224880382776 1342.9665071770335,150.08612440191388 1440,0 L 1440,500 L 0,500 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
    </svg>
  );
};
