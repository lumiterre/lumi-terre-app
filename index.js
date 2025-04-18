
function diagnose() {
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    alert("生年月日を入力してください");
    return;
  }

  const [year, month, day] = birthdate.split("-").map(Number);
  const key = `${year}-${month}`;
  const base = baseMap[key];

  if (base === undefined) {
    alert("この年月のデータは未対応です。");
    return;
  }

  let kin = base + (day - 1);

  // うるう年補正（3月以前のみ）
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  if (isLeapYear && month < 3) {
    kin += 1;
  }

  if (kin > 260) kin -= 260;
  if (kin < 1) kin += 260;

  const tone = kin % 13 === 0 ? 13 : kin % 13;

  const solarSigns = [
    "赤い龍", "白い風", "青い夜", "黄色い種", "赤い蛇", "白い世界の橋渡し", "青い手", "黄色い星",
    "赤い月", "白い犬", "青い猿", "黄色い人", "赤い空歩く者", "白い魔法使い", "青い鷲", "黄色い戦士",
    "赤い地球", "白い鏡", "青い嵐", "黄色い太陽"
  ];
  const solar = solarSigns[(kin - 1) % 20];

  const waveSpells = [
    [1, 13, "赤い龍"], [14, 26, "白い魔法使い"], [27, 39, "青い手"], [40, 52, "黄色い太陽"],
    [53, 65, "赤い空歩く者"], [66, 78, "白い世界の橋渡し"], [79, 91, "青い嵐"], [92, 104, "黄色い人"],
    [105, 117, "赤い蛇"], [118, 130, "白い鏡"], [131, 143, "青い猿"], [144, 156, "黄色い種"],
    [157, 169, "赤い地球"], [170, 182, "白い犬"], [183, 195, "青い夜"], [196, 208, "黄色い戦士"],
    [209, 221, "赤い月"], [222, 234, "白い風"], [235, 247, "青い鷲"], [248, 260, "黄色い星"]
  ];
  const wave = waveSpells.find(([start, end]) => kin >= start && kin <= end)?.[2] || "不明";

  document.getElementById("output").textContent = `
KIN: ${kin}
太陽の紋章: ${solar}
ウェイブスペル: ${wave}
銀河の音: ${tone}
  `.trim();
}


const baseMap = {
  "1910-1": 62,
  "1910-2": 93,
  "1910-3": 121,
  "1910-4": 152,
  "1910-5": 182,
  "1910-6": 213,
  "1910-7": 243,
  "1910-8": 14,
  "1910-9": 45,
  "1910-10": 75,
  "1910-11": 106,
  "1910-12": 136,
  "1911-1": 167,
  "1911-2": 198,
  "1911-3": 226,
  "1911-4": 257,
  "1911-5": 27,
  "1911-6": 58,
  "1911-7": 88,
  "1911-8": 119,
  "1911-9": 150,
  "1911-10": 180,
  "1911-11": 211,
  "1911-12": 241,
  "1912-1": 12,
  "1912-2": 43,
  "1912-3": 71,
  "1912-4": 102,
  "1912-5": 132,
  "1912-6": 163,
  "1912-7": 193,
  "1912-8": 224,
  "1912-9": 255,
  "1912-10": 25,
  "1912-11": 56,
  "1912-12": 86,
  "1913-1": 117,
  "1913-2": 148,
  "1913-3": 176,
  "1913-4": 207,
  "1913-5": 237,
  "1913-6": 8,
  "1913-7": 38,
  "1913-8": 69,
  "1913-9": 100,
  "1913-10": 130,
  "1913-11": 161,
  "1913-12": 191,
  "1914-1": 222,
  "1914-2": 253,
  "1914-3": 21,
  "1914-4": 52,
  "1914-5": 82,
  "1914-6": 113,
  "1914-7": 143,
  "1914-8": 174,
  "1914-9": 205,
  "1914-10": 235,
  "1914-11": 6,
  "1914-12": 36,
  "1915-1": 67,
  "1915-2": 98,
  "1915-3": 126,
  "1915-4": 157,
  "1915-5": 187,
  "1915-6": 218,
  "1915-7": 248,
  "1915-8": 19,
  "1915-9": 50,
  "1915-10": 80,
  "1915-11": 111,
  "1915-12": 141,
  "1916-1": 172,
  "1916-2": 203,
  "1916-3": 231,
  "1916-4": 2,
  "1916-5": 32,
  "1916-6": 63,
  "1916-7": 93,
  "1916-8": 124,
  "1916-9": 155,
  "1916-10": 185,
  "1916-11": 216,
  "1916-12": 246,
  "1917-1": 17,
  "1917-2": 48,
  "1917-3": 76,
  "1917-4": 107,
  "1917-5": 137,
  "1917-6": 168,
  "1917-7": 198,
  "1917-8": 229,
  "1917-9": 0,
  "1917-10": 30,
  "1917-11": 61,
  "1917-12": 91,
  "1918-1": 122,
  "1918-2": 153,
  "1918-3": 181,
  "1918-4": 212,
  "1918-5": 242,
  "1918-6": 13,
  "1918-7": 43,
  "1918-8": 74,
  "1918-9": 105,
  "1918-10": 135,
  "1918-11": 166,
  "1918-12": 196,
  "1919-1": 227,
  "1919-2": 258,
  "1919-3": 26,
  "1919-4": 57,
  "1919-5": 87,
  "1919-6": 118,
  "1919-7": 148,
  "1919-8": 179,
  "1919-9": 210,
  "1919-10": 240,
  "1919-11": 11,
  "1919-12": 41,
  "1920-1": 72,
  "1920-2": 103,
  "1920-3": 131,
  "1920-4": 162,
  "1920-5": 192,
  "1920-6": 223,
  "1920-7": 253,
  "1920-8": 24,
  "1920-9": 55,
  "1920-10": 85,
  "1920-11": 116,
  "1920-12": 146,
  "1921-1": 177,
  "1921-2": 208,
  "1921-3": 236,
  "1921-4": 7,
  "1921-5": 37,
  "1921-6": 68,
  "1921-7": 98,
  "1921-8": 129,
  "1921-9": 160,
  "1921-10": 190,
  "1921-11": 221,
  "1921-12": 251,
  "1922-1": 22,
  "1922-2": 53,
  "1922-3": 81,
  "1922-4": 112,
  "1922-5": 142,
  "1922-6": 173,
  "1922-7": 203,
  "1922-8": 234,
  "1922-9": 5,
  "1922-10": 35,
  "1922-11": 66,
  "1922-12": 96,
  "1923-1": 127,
  "1923-2": 158,
  "1923-3": 186,
  "1923-4": 217,
  "1923-5": 247,
  "1923-6": 18,
  "1923-7": 48,
  "1923-8": 79,
  "1923-9": 110,
  "1923-10": 140,
  "1923-11": 171,
  "1923-12": 201,
  "1924-1": 232,
  "1924-2": 3,
  "1924-3": 31,
  "1924-4": 62,
  "1924-5": 92,
  "1924-6": 123,
  "1924-7": 153,
  "1924-8": 184,
  "1924-9": 215,
  "1924-10": 245,
  "1924-11": 16,
  "1924-12": 46,
  "1925-1": 77,
  "1925-2": 108,
  "1925-3": 136,
  "1925-4": 167,
  "1925-5": 197,
  "1925-6": 228,
  "1925-7": 258,
  "1925-8": 29,
  "1925-9": 60,
  "1925-10": 90,
  "1925-11": 121,
  "1925-12": 151,
  "1926-1": 182,
  "1926-2": 213,
  "1926-3": 241,
  "1926-4": 12,
  "1926-5": 42,
  "1926-6": 73,
  "1926-7": 103,
  "1926-8": 134,
  "1926-9": 165,
  "1926-10": 195,
  "1926-11": 226,
  "1926-12": 256,
  "1927-1": 27,
  "1927-2": 58,
  "1927-3": 86,
  "1927-4": 117,
  "1927-5": 147,
  "1927-6": 178,
  "1927-7": 208,
  "1927-8": 239,
  "1927-9": 10,
  "1927-10": 40,
  "1927-11": 71,
  "1927-12": 101,
  "1928-1": 132,
  "1928-2": 163,
  "1928-3": 191,
  "1928-4": 222,
  "1928-5": 252,
  "1928-6": 23,
  "1928-7": 53,
  "1928-8": 84,
  "1928-9": 115,
  "1928-10": 145,
  "1928-11": 176,
  "1928-12": 206,
  "1929-1": 237,
  "1929-2": 8,
  "1929-3": 36,
  "1929-4": 67,
  "1929-5": 97,
  "1929-6": 128,
  "1929-7": 158,
  "1929-8": 189,
  "1929-9": 220,
  "1929-10": 250,
  "1929-11": 21,
  "1929-12": 51,
  "1930-1": 82,
  "1930-2": 113,
  "1930-3": 141,
  "1930-4": 172,
  "1930-5": 202,
  "1930-6": 233,
  "1930-7": 3,
  "1930-8": 34,
  "1930-9": 65,
  "1930-10": 95,
  "1930-11": 126,
  "1930-12": 156,
  "1931-1": 187,
  "1931-2": 218,
  "1931-3": 246,
  "1931-4": 17,
  "1931-5": 47,
  "1931-6": 78,
  "1931-7": 108,
  "1931-8": 139,
  "1931-9": 170,
  "1931-10": 200,
  "1931-11": 231,
  "1931-12": 1,
  "1932-1": 32,
  "1932-2": 63,
  "1932-3": 91,
  "1932-4": 122,
  "1932-5": 152,
  "1932-6": 183,
  "1932-7": 213,
  "1932-8": 244,
  "1932-9": 15,
  "1932-10": 45,
  "1932-11": 76,
  "1932-12": 106,
  "1933-1": 137,
  "1933-2": 168,
  "1933-3": 196,
  "1933-4": 227,
  "1933-5": 257,
  "1933-6": 28,
  "1933-7": 58,
  "1933-8": 89,
  "1933-9": 120,
  "1933-10": 150,
  "1933-11": 181,
  "1933-12": 211,
  "1934-1": 242,
  "1934-2": 13,
  "1934-3": 41,
  "1934-4": 72,
  "1934-5": 102,
  "1934-6": 133,
  "1934-7": 163,
  "1934-8": 194,
  "1934-9": 225,
  "1934-10": 255,
  "1934-11": 26,
  "1934-12": 56,
  "1935-1": 87,
  "1935-2": 118,
  "1935-3": 146,
  "1935-4": 177,
  "1935-5": 207,
  "1935-6": 238,
  "1935-7": 8,
  "1935-8": 39,
  "1935-9": 70,
  "1935-10": 100,
  "1935-11": 131,
  "1935-12": 161,
  "1936-1": 192,
  "1936-2": 223,
  "1936-3": 251,
  "1936-4": 22,
  "1936-5": 52,
  "1936-6": 83,
  "1936-7": 113,
  "1936-8": 144,
  "1936-9": 175,
  "1936-10": 205,
  "1936-11": 236,
  "1936-12": 6,
  "1937-1": 37,
  "1937-2": 68,
  "1937-3": 96,
  "1937-4": 127,
  "1937-5": 157,
  "1937-6": 188,
  "1937-7": 218,
  "1937-8": 249,
  "1937-9": 20,
  "1937-10": 50,
  "1937-11": 81,
  "1937-12": 111,
  "1938-1": 142,
  "1938-2": 173,
  "1938-3": 201,
  "1938-4": 232,
  "1938-5": 2,
  "1938-6": 33,
  "1938-7": 63,
  "1938-8": 94,
  "1938-9": 125,
  "1938-10": 155,
  "1938-11": 186,
  "1938-12": 216,
  "1939-1": 247,
  "1939-2": 18,
  "1939-3": 46,
  "1939-4": 77,
  "1939-5": 107,
  "1939-6": 138,
  "1939-7": 168,
  "1939-8": 199,
  "1939-9": 230,
  "1939-10": 0,
  "1939-11": 31,
  "1939-12": 61,
  "1940-1": 92,
  "1940-2": 123,
  "1940-3": 151,
  "1940-4": 182,
  "1940-5": 212,
  "1940-6": 243,
  "1940-7": 13,
  "1940-8": 44,
  "1940-9": 75,
  "1940-10": 105,
  "1940-11": 136,
  "1940-12": 166,
  "1941-1": 197,
  "1941-2": 228,
  "1941-3": 256,
  "1941-4": 27,
  "1941-5": 57,
  "1941-6": 88,
  "1941-7": 118,
  "1941-8": 149,
  "1941-9": 180,
  "1941-10": 210,
  "1941-11": 241,
  "1941-12": 11,
  "1942-1": 42,
  "1942-2": 73,
  "1942-3": 101,
  "1942-4": 132,
  "1942-5": 162,
  "1942-6": 193,
  "1942-7": 223,
  "1942-8": 254,
  "1942-9": 25,
  "1942-10": 55,
  "1942-11": 86,
  "1942-12": 116,
  "1943-1": 147,
  "1943-2": 178,
  "1943-3": 206,
  "1943-4": 237,
  "1943-5": 7,
  "1943-6": 38,
  "1943-7": 68,
  "1943-8": 99,
  "1943-9": 130,
  "1943-10": 160,
  "1943-11": 191,
  "1943-12": 221,
  "1944-1": 252,
  "1944-2": 23,
  "1944-3": 51,
  "1944-4": 82,
  "1944-5": 112,
  "1944-6": 143,
  "1944-7": 173,
  "1944-8": 204,
  "1944-9": 235,
  "1944-10": 5,
  "1944-11": 36,
  "1944-12": 66,
  "1945-1": 97,
  "1945-2": 128,
  "1945-3": 156,
  "1945-4": 187,
  "1945-5": 217,
  "1945-6": 248,
  "1945-7": 18,
  "1945-8": 49,
  "1945-9": 80,
  "1945-10": 110,
  "1945-11": 141,
  "1945-12": 171,
  "1946-1": 202,
  "1946-2": 233,
  "1946-3": 1,
  "1946-4": 32,
  "1946-5": 62,
  "1946-6": 93,
  "1946-7": 123,
  "1946-8": 154,
  "1946-9": 185,
  "1946-10": 215,
  "1946-11": 246,
  "1946-12": 16,
  "1947-1": 47,
  "1947-2": 78,
  "1947-3": 106,
  "1947-4": 137,
  "1947-5": 167,
  "1947-6": 198,
  "1947-7": 228,
  "1947-8": 259,
  "1947-9": 30,
  "1947-10": 60,
  "1947-11": 91,
  "1947-12": 121,
  "1948-1": 152,
  "1948-2": 183,
  "1948-3": 211,
  "1948-4": 242,
  "1948-5": 12,
  "1948-6": 43,
  "1948-7": 73,
  "1948-8": 104,
  "1948-9": 135,
  "1948-10": 165,
  "1948-11": 196,
  "1948-12": 226,
  "1949-1": 257,
  "1949-2": 28,
  "1949-3": 56,
  "1949-4": 87,
  "1949-5": 117,
  "1949-6": 148,
  "1949-7": 178,
  "1949-8": 209,
  "1949-9": 240,
  "1949-10": 10,
  "1949-11": 41,
  "1949-12": 71,
  "1950-1": 102,
  "1950-2": 133,
  "1950-3": 161,
  "1950-4": 192,
  "1950-5": 222,
  "1950-6": 253,
  "1950-7": 23,
  "1950-8": 54,
  "1950-9": 85,
  "1950-10": 115,
  "1950-11": 146,
  "1950-12": 176,
  "1951-1": 207,
  "1951-2": 238,
  "1951-3": 6,
  "1951-4": 37,
  "1951-5": 67,
  "1951-6": 98,
  "1951-7": 128,
  "1951-8": 159,
  "1951-9": 190,
  "1951-10": 220,
  "1951-11": 251,
  "1951-12": 21,
  "1952-1": 52,
  "1952-2": 83,
  "1952-3": 111,
  "1952-4": 142,
  "1952-5": 172,
  "1952-6": 203,
  "1952-7": 233,
  "1952-8": 4,
  "1952-9": 35,
  "1952-10": 65,
  "1952-11": 96,
  "1952-12": 126,
  "1953-1": 157,
  "1953-2": 188,
  "1953-3": 216,
  "1953-4": 247,
  "1953-5": 17,
  "1953-6": 48,
  "1953-7": 78,
  "1953-8": 109,
  "1953-9": 140,
  "1953-10": 170,
  "1953-11": 201,
  "1953-12": 231,
  "1954-1": 2,
  "1954-2": 33,
  "1954-3": 61,
  "1954-4": 92,
  "1954-5": 122,
  "1954-6": 153,
  "1954-7": 183,
  "1954-8": 214,
  "1954-9": 245,
  "1954-10": 15,
  "1954-11": 46,
  "1954-12": 76,
  "1955-1": 107,
  "1955-2": 138,
  "1955-3": 166,
  "1955-4": 197,
  "1955-5": 227,
  "1955-6": 258,
  "1955-7": 28,
  "1955-8": 59,
  "1955-9": 90,
  "1955-10": 120,
  "1955-11": 151,
  "1955-12": 181,
  "1956-1": 212,
  "1956-2": 243,
  "1956-3": 11,
  "1956-4": 42,
  "1956-5": 72,
  "1956-6": 103,
  "1956-7": 133,
  "1956-8": 164,
  "1956-9": 195,
  "1956-10": 225,
  "1956-11": 256,
  "1956-12": 26,
  "1957-1": 57,
  "1957-2": 88,
  "1957-3": 116,
  "1957-4": 147,
  "1957-5": 177,
  "1957-6": 208,
  "1957-7": 238,
  "1957-8": 9,
  "1957-9": 40,
  "1957-10": 70,
  "1957-11": 101,
  "1957-12": 131,
  "1958-1": 162,
  "1958-2": 193,
  "1958-3": 221,
  "1958-4": 252,
  "1958-5": 22,
  "1958-6": 53,
  "1958-7": 83,
  "1958-8": 114,
  "1958-9": 145,
  "1958-10": 175,
  "1958-11": 206,
  "1958-12": 236,
  "1959-1": 7,
  "1959-2": 38,
  "1959-3": 66,
  "1959-4": 97,
  "1959-5": 127,
  "1959-6": 158,
  "1959-7": 188,
  "1959-8": 219,
  "1959-9": 250,
  "1959-10": 20,
  "1959-11": 51,
  "1959-12": 81,
  "1960-1": 112,
  "1960-2": 143,
  "1960-3": 171,
  "1960-4": 202,
  "1960-5": 232,
  "1960-6": 3,
  "1960-7": 33,
  "1960-8": 64,
  "1960-9": 95,
  "1960-10": 125,
  "1960-11": 156,
  "1960-12": 186,
  "1961-1": 217,
  "1961-2": 248,
  "1961-3": 16,
  "1961-4": 47,
  "1961-5": 77,
  "1961-6": 108,
  "1961-7": 138,
  "1961-8": 169,
  "1961-9": 200,
  "1961-10": 230,
  "1961-11": 1,
  "1961-12": 31,
  "1962-1": 62,
  "1962-2": 93,
  "1962-3": 121,
  "1962-4": 152,
  "1962-5": 182,
  "1962-6": 213,
  "1962-7": 243,
  "1962-8": 14,
  "1962-9": 45,
  "1962-10": 75,
  "1962-11": 106,
  "1962-12": 136,
  "1963-1": 167,
  "1963-2": 198,
  "1963-3": 226,
  "1963-4": 257,
  "1963-5": 27,
  "1963-6": 58,
  "1963-7": 88,
  "1963-8": 119,
  "1963-9": 150,
  "1963-10": 180,
  "1963-11": 211,
  "1963-12": 241,
  "1964-1": 12,
  "1964-2": 43,
  "1964-3": 71,
  "1964-4": 102,
  "1964-5": 132,
  "1964-6": 163,
  "1964-7": 193,
  "1964-8": 224,
  "1964-9": 255,
  "1964-10": 25,
  "1964-11": 56,
  "1964-12": 86,
  "1965-1": 117,
  "1965-2": 148,
  "1965-3": 176,
  "1965-4": 207,
  "1965-5": 237,
  "1965-6": 8,
  "1965-7": 38,
  "1965-8": 69,
  "1965-9": 100,
  "1965-10": 130,
  "1965-11": 161,
  "1965-12": 191,
  "1966-1": 222,
  "1966-2": 253,
  "1966-3": 21,
  "1966-4": 52,
  "1966-5": 82,
  "1966-6": 113,
  "1966-7": 143,
  "1966-8": 174,
  "1966-9": 205,
  "1966-10": 235,
  "1966-11": 6,
  "1966-12": 36,
  "1967-1": 67,
  "1967-2": 98,
  "1967-3": 126,
  "1967-4": 157,
  "1967-5": 187,
  "1967-6": 218,
  "1967-7": 248,
  "1967-8": 19,
  "1967-9": 50,
  "1967-10": 80,
  "1967-11": 111,
  "1967-12": 141,
  "1968-1": 172,
  "1968-2": 203,
  "1968-3": 231,
  "1968-4": 2,
  "1968-5": 32,
  "1968-6": 63,
  "1968-7": 93,
  "1968-8": 124,
  "1968-9": 155,
  "1968-10": 185,
  "1968-11": 216,
  "1968-12": 246,
  "1969-1": 17,
  "1969-2": 48,
  "1969-3": 76,
  "1969-4": 107,
  "1969-5": 137,
  "1969-6": 168,
  "1969-7": 198,
  "1969-8": 229,
  "1969-9": 0,
  "1969-10": 30,
  "1969-11": 61,
  "1969-12": 91,
  "1970-1": 122,
  "1970-2": 153,
  "1970-3": 181,
  "1970-4": 212,
  "1970-5": 242,
  "1970-6": 13,
  "1970-7": 43,
  "1970-8": 74,
  "1970-9": 105,
  "1970-10": 135,
  "1970-11": 166,
  "1970-12": 196,
  "1971-1": 227,
  "1971-2": 258,
  "1971-3": 26,
  "1971-4": 57,
  "1971-5": 87,
  "1971-6": 118,
  "1971-7": 148,
  "1971-8": 179,
  "1971-9": 210,
  "1971-10": 240,
  "1971-11": 11,
  "1971-12": 41,
  "1972-1": 72,
  "1972-2": 103,
  "1972-3": 131,
  "1972-4": 162,
  "1972-5": 192,
  "1972-6": 223,
  "1972-7": 253,
  "1972-8": 24,
  "1972-9": 55,
  "1972-10": 85,
  "1972-11": 116,
  "1972-12": 146,
  "1973-1": 177,
  "1973-2": 208,
  "1973-3": 236,
  "1973-4": 7,
  "1973-5": 37,
  "1973-6": 68,
  "1973-7": 98,
  "1973-8": 129,
  "1973-9": 160,
  "1973-10": 190,
  "1973-11": 221,
  "1973-12": 251,
  "1974-1": 22,
  "1974-2": 53,
  "1974-3": 81,
  "1974-4": 112,
  "1974-5": 142,
  "1974-6": 173,
  "1974-7": 203,
  "1974-8": 234,
  "1974-9": 5,
  "1974-10": 35,
  "1974-11": 66,
  "1974-12": 96,
  "1975-1": 127,
  "1975-2": 158,
  "1975-3": 186,
  "1975-4": 217,
  "1975-5": 247,
  "1975-6": 18,
  "1975-7": 48,
  "1975-8": 79,
  "1975-9": 110,
  "1975-10": 140,
  "1975-11": 171,
  "1975-12": 201,
  "1976-1": 232,
  "1976-2": 3,
  "1976-3": 31,
  "1976-4": 62,
  "1976-5": 92,
  "1976-6": 123,
  "1976-7": 153,
  "1976-8": 184,
  "1976-9": 215,
  "1976-10": 245,
  "1976-11": 16,
  "1976-12": 46,
  "1977-1": 77,
  "1977-2": 108,
  "1977-3": 136,
  "1977-4": 167,
  "1977-5": 197,
  "1977-6": 228,
  "1977-7": 258,
  "1977-8": 29,
  "1977-9": 60,
  "1977-10": 90,
  "1977-11": 121,
  "1977-12": 151,
  "1978-1": 182,
  "1978-2": 213,
  "1978-3": 241,
  "1978-4": 12,
  "1978-5": 42,
  "1978-6": 73,
  "1978-7": 103,
  "1978-8": 134,
  "1978-9": 165,
  "1978-10": 195,
  "1978-11": 226,
  "1978-12": 256,
  "1979-1": 27,
  "1979-2": 58,
  "1979-3": 86,
  "1979-4": 117,
  "1979-5": 147,
  "1979-6": 178,
  "1979-7": 208,
  "1979-8": 239,
  "1979-9": 10,
  "1979-10": 40,
  "1979-11": 71,
  "1979-12": 101,
  "1980-1": 132,
  "1980-2": 163,
  "1980-3": 191,
  "1980-4": 222,
  "1980-5": 252,
  "1980-6": 23,
  "1980-7": 53,
  "1980-8": 84,
  "1980-9": 115,
  "1980-10": 145,
  "1980-11": 176,
  "1980-12": 206,
  "1981-1": 237,
  "1981-2": 8,
  "1981-3": 36,
  "1981-4": 67,
  "1981-5": 97,
  "1981-6": 128,
  "1981-7": 158,
  "1981-8": 189,
  "1981-9": 220,
  "1981-10": 250,
  "1981-11": 21,
  "1981-12": 51,
  "1982-1": 82,
  "1982-2": 113,
  "1982-3": 141,
  "1982-4": 172,
  "1982-5": 202,
  "1982-6": 233,
  "1982-7": 3,
  "1982-8": 34,
  "1982-9": 65,
  "1982-10": 95,
  "1982-11": 126,
  "1982-12": 156,
  "1983-1": 187,
  "1983-2": 218,
  "1983-3": 246,
  "1983-4": 17,
  "1983-5": 47,
  "1983-6": 78,
  "1983-7": 108,
  "1983-8": 139,
  "1983-9": 170,
  "1983-10": 200,
  "1983-11": 231,
  "1983-12": 1,
  "1984-1": 32,
  "1984-2": 63,
  "1984-3": 91,
  "1984-4": 122,
  "1984-5": 152,
  "1984-6": 183,
  "1984-7": 213,
  "1984-8": 244,
  "1984-9": 15,
  "1984-10": 45,
  "1984-11": 76,
  "1984-12": 106,
  "1985-1": 137,
  "1985-2": 168,
  "1985-3": 196,
  "1985-4": 227,
  "1985-5": 257,
  "1985-6": 28,
  "1985-7": 58,
  "1985-8": 89,
  "1985-9": 120,
  "1985-10": 150,
  "1985-11": 181,
  "1985-12": 211,
  "1986-1": 242,
  "1986-2": 13,
  "1986-3": 41,
  "1986-4": 72,
  "1986-5": 102,
  "1986-6": 133,
  "1986-7": 163,
  "1986-8": 194,
  "1986-9": 225,
  "1986-10": 255,
  "1986-11": 26,
  "1986-12": 56,
  "1987-1": 87,
  "1987-2": 118,
  "1987-3": 146,
  "1987-4": 177,
  "1987-5": 207,
  "1987-6": 238,
  "1987-7": 8,
  "1987-8": 39,
  "1987-9": 70,
  "1987-10": 100,
  "1987-11": 131,
  "1987-12": 161,
  "1988-1": 192,
  "1988-2": 223,
  "1988-3": 251,
  "1988-4": 22,
  "1988-5": 52,
  "1988-6": 83,
  "1988-7": 113,
  "1988-8": 144,
  "1988-9": 175,
  "1988-10": 205,
  "1988-11": 236,
  "1988-12": 6,
  "1989-1": 37,
  "1989-2": 68,
  "1989-3": 96,
  "1989-4": 127,
  "1989-5": 157,
  "1989-6": 188,
  "1989-7": 218,
  "1989-8": 249,
  "1989-9": 20,
  "1989-10": 50,
  "1989-11": 81,
  "1989-12": 111,
  "1990-1": 142,
  "1990-2": 173,
  "1990-3": 201,
  "1990-4": 232,
  "1990-5": 2,
  "1990-6": 33,
  "1990-7": 63,
  "1990-8": 94,
  "1990-9": 125,
  "1990-10": 155,
  "1990-11": 186,
  "1990-12": 216,
  "1991-1": 247,
  "1991-2": 18,
  "1991-3": 46,
  "1991-4": 77,
  "1991-5": 107,
  "1991-6": 138,
  "1991-7": 168,
  "1991-8": 199,
  "1991-9": 230,
  "1991-10": 0,
  "1991-11": 31,
  "1991-12": 61,
  "1992-1": 92,
  "1992-2": 123,
  "1992-3": 151,
  "1992-4": 182,
  "1992-5": 212,
  "1992-6": 243,
  "1992-7": 13,
  "1992-8": 44,
  "1992-9": 75,
  "1992-10": 105,
  "1992-11": 136,
  "1992-12": 166,
  "1993-1": 197,
  "1993-2": 228,
  "1993-3": 256,
  "1993-4": 27,
  "1993-5": 57,
  "1993-6": 88,
  "1993-7": 118,
  "1993-8": 149,
  "1993-9": 180,
  "1993-10": 210,
  "1993-11": 241,
  "1993-12": 11,
  "1994-1": 42,
  "1994-2": 73,
  "1994-3": 101,
  "1994-4": 132,
  "1994-5": 162,
  "1994-6": 193,
  "1994-7": 223,
  "1994-8": 254,
  "1994-9": 25,
  "1994-10": 55,
  "1994-11": 86,
  "1994-12": 116,
  "1995-1": 147,
  "1995-2": 178,
  "1995-3": 206,
  "1995-4": 237,
  "1995-5": 7,
  "1995-6": 38,
  "1995-7": 68,
  "1995-8": 99,
  "1995-9": 130,
  "1995-10": 160,
  "1995-11": 191,
  "1995-12": 221,
  "1996-1": 252,
  "1996-2": 23,
  "1996-3": 51,
  "1996-4": 82,
  "1996-5": 112,
  "1996-6": 143,
  "1996-7": 173,
  "1996-8": 204,
  "1996-9": 235,
  "1996-10": 5,
  "1996-11": 36,
  "1996-12": 66,
  "1997-1": 97,
  "1997-2": 128,
  "1997-3": 156,
  "1997-4": 187,
  "1997-5": 217,
  "1997-6": 248,
  "1997-7": 18,
  "1997-8": 49,
  "1997-9": 80,
  "1997-10": 110,
  "1997-11": 141,
  "1997-12": 171,
  "1998-1": 202,
  "1998-2": 233,
  "1998-3": 1,
  "1998-4": 32,
  "1998-5": 62,
  "1998-6": 93,
  "1998-7": 123,
  "1998-8": 154,
  "1998-9": 185,
  "1998-10": 215,
  "1998-11": 246,
  "1998-12": 16,
  "1999-1": 47,
  "1999-2": 78,
  "1999-3": 106,
  "1999-4": 137,
  "1999-5": 167,
  "1999-6": 198,
  "1999-7": 228,
  "1999-8": 259,
  "1999-9": 30,
  "1999-10": 60,
  "1999-11": 91,
  "1999-12": 121,
  "2000-1": 152,
  "2000-2": 183,
  "2000-3": 211,
  "2000-4": 242,
  "2000-5": 12,
  "2000-6": 43,
  "2000-7": 73,
  "2000-8": 104,
  "2000-9": 135,
  "2000-10": 165,
  "2000-11": 196,
  "2000-12": 226,
  "2001-1": 257,
  "2001-2": 28,
  "2001-3": 56,
  "2001-4": 87,
  "2001-5": 117,
  "2001-6": 148,
  "2001-7": 178,
  "2001-8": 209,
  "2001-9": 240,
  "2001-10": 10,
  "2001-11": 41,
  "2001-12": 71,
  "2002-1": 102,
  "2002-2": 133,
  "2002-3": 161,
  "2002-4": 192,
  "2002-5": 222,
  "2002-6": 253,
  "2002-7": 23,
  "2002-8": 54,
  "2002-9": 85,
  "2002-10": 115,
  "2002-11": 146,
  "2002-12": 176,
  "2003-1": 207,
  "2003-2": 238,
  "2003-3": 6,
  "2003-4": 37,
  "2003-5": 67,
  "2003-6": 98,
  "2003-7": 128,
  "2003-8": 159,
  "2003-9": 190,
  "2003-10": 220,
  "2003-11": 251,
  "2003-12": 21,
  "2004-1": 52,
  "2004-2": 83,
  "2004-3": 111,
  "2004-4": 142,
  "2004-5": 172,
  "2004-6": 203,
  "2004-7": 233,
  "2004-8": 4,
  "2004-9": 35,
  "2004-10": 65,
  "2004-11": 96,
  "2004-12": 126,
  "2005-1": 157,
  "2005-2": 188,
  "2005-3": 216,
  "2005-4": 247,
  "2005-5": 17,
  "2005-6": 48,
  "2005-7": 78,
  "2005-8": 109,
  "2005-9": 140,
  "2005-10": 170,
  "2005-11": 201,
  "2005-12": 231,
  "2006-1": 2,
  "2006-2": 33,
  "2006-3": 61,
  "2006-4": 92,
  "2006-5": 122,
  "2006-6": 153,
  "2006-7": 183,
  "2006-8": 214,
  "2006-9": 245,
  "2006-10": 15,
  "2006-11": 46,
  "2006-12": 76,
  "2007-1": 107,
  "2007-2": 138,
  "2007-3": 166,
  "2007-4": 197,
  "2007-5": 227,
  "2007-6": 258,
  "2007-7": 28,
  "2007-8": 59,
  "2007-9": 90,
  "2007-10": 120,
  "2007-11": 151,
  "2007-12": 181,
  "2008-1": 212,
  "2008-2": 243,
  "2008-3": 11,
  "2008-4": 42,
  "2008-5": 72,
  "2008-6": 103,
  "2008-7": 133,
  "2008-8": 164,
  "2008-9": 195,
  "2008-10": 225,
  "2008-11": 256,
  "2008-12": 26,
  "2009-1": 57,
  "2009-2": 88,
  "2009-3": 116,
  "2009-4": 147,
  "2009-5": 177,
  "2009-6": 208,
  "2009-7": 238,
  "2009-8": 9,
  "2009-9": 40,
  "2009-10": 70,
  "2009-11": 101,
  "2009-12": 131,
  "2010-1": 162,
  "2010-2": 193,
  "2010-3": 221,
  "2010-4": 252,
  "2010-5": 22,
  "2010-6": 53,
  "2010-7": 83,
  "2010-8": 114,
  "2010-9": 145,
  "2010-10": 175,
  "2010-11": 206,
  "2010-12": 236,
  "2011-1": 7,
  "2011-2": 38,
  "2011-3": 66,
  "2011-4": 97,
  "2011-5": 127,
  "2011-6": 158,
  "2011-7": 188,
  "2011-8": 219,
  "2011-9": 250,
  "2011-10": 20,
  "2011-11": 51,
  "2011-12": 81,
  "2012-1": 112,
  "2012-2": 143,
  "2012-3": 171,
  "2012-4": 202,
  "2012-5": 232,
  "2012-6": 3,
  "2012-7": 33,
  "2012-8": 64,
  "2012-9": 95,
  "2012-10": 125,
  "2012-11": 156,
  "2012-12": 186,
  "2013-1": 217,
  "2013-2": 248,
  "2013-3": 16,
  "2013-4": 47,
  "2013-5": 77,
  "2013-6": 108,
  "2013-7": 138,
  "2013-8": 169,
  "2013-9": 200,
  "2013-10": 230,
  "2013-11": 1,
  "2013-12": 31,
  "2014-1": 62,
  "2014-2": 93,
  "2014-3": 121,
  "2014-4": 152,
  "2014-5": 182,
  "2014-6": 213,
  "2014-7": 243,
  "2014-8": 14,
  "2014-9": 45,
  "2014-10": 75,
  "2014-11": 106,
  "2014-12": 136,
  "2015-1": 167,
  "2015-2": 198,
  "2015-3": 226,
  "2015-4": 257,
  "2015-5": 27,
  "2015-6": 58,
  "2015-7": 88,
  "2015-8": 119,
  "2015-9": 150,
  "2015-10": 180,
  "2015-11": 211,
  "2015-12": 241,
  "2016-1": 12,
  "2016-2": 43,
  "2016-3": 71,
  "2016-4": 102,
  "2016-5": 132,
  "2016-6": 163,
  "2016-7": 193,
  "2016-8": 224,
  "2016-9": 255,
  "2016-10": 25,
  "2016-11": 56,
  "2016-12": 86,
  "2017-1": 117,
  "2017-2": 148,
  "2017-3": 176,
  "2017-4": 207,
  "2017-5": 237,
  "2017-6": 8,
  "2017-7": 38,
  "2017-8": 69,
  "2017-9": 100,
  "2017-10": 130,
  "2017-11": 161,
  "2017-12": 191,
  "2018-1": 222,
  "2018-2": 253,
  "2018-3": 21,
  "2018-4": 52,
  "2018-5": 82,
  "2018-6": 113,
  "2018-7": 143,
  "2018-8": 174,
  "2018-9": 205,
  "2018-10": 235,
  "2018-11": 6,
  "2018-12": 36,
  "2019-1": 67,
  "2019-2": 98,
  "2019-3": 126,
  "2019-4": 157,
  "2019-5": 187,
  "2019-6": 218,
  "2019-7": 248,
  "2019-8": 19,
  "2019-9": 50,
  "2019-10": 80,
  "2019-11": 111,
  "2019-12": 141,
  "2020-1": 172,
  "2020-2": 203,
  "2020-3": 231,
  "2020-4": 2,
  "2020-5": 32,
  "2020-6": 63,
  "2020-7": 93,
  "2020-8": 124,
  "2020-9": 155,
  "2020-10": 185,
  "2020-11": 216,
  "2020-12": 246,
  "2021-1": 17,
  "2021-2": 48,
  "2021-3": 76,
  "2021-4": 107,
  "2021-5": 137,
  "2021-6": 168,
  "2021-7": 198,
  "2021-8": 229,
  "2021-9": 0,
  "2021-10": 30,
  "2021-11": 61,
  "2021-12": 91,
  "2022-1": 122,
  "2022-2": 153,
  "2022-3": 181,
  "2022-4": 212,
  "2022-5": 242,
  "2022-6": 13,
  "2022-7": 43,
  "2022-8": 74,
  "2022-9": 105,
  "2022-10": 135,
  "2022-11": 166,
  "2022-12": 196,
  "2023-1": 227,
  "2023-2": 258,
  "2023-3": 26,
  "2023-4": 57,
  "2023-5": 87,
  "2023-6": 118,
  "2023-7": 148,
  "2023-8": 179,
  "2023-9": 210,
  "2023-10": 240,
  "2023-11": 11,
  "2023-12": 41,
  "2024-1": 72,
  "2024-2": 103,
  "2024-3": 131,
  "2024-4": 162,
  "2024-5": 192,
  "2024-6": 223,
  "2024-7": 253,
  "2024-8": 24,
  "2024-9": 55,
  "2024-10": 85,
  "2024-11": 116,
  "2024-12": 146,
  "2025-1": 177,
  "2025-2": 208,
  "2025-3": 236,
  "2025-4": 7,
  "2025-5": 37,
  "2025-6": 68,
  "2025-7": 98,
  "2025-8": 129,
  "2025-9": 160,
  "2025-10": 190,
  "2025-11": 221,
  "2025-12": 251,
  "2026-1": 22,
  "2026-2": 53,
  "2026-3": 81,
  "2026-4": 112,
  "2026-5": 142,
  "2026-6": 173,
  "2026-7": 203,
  "2026-8": 234,
  "2026-9": 5,
  "2026-10": 35,
  "2026-11": 66,
  "2026-12": 96,
  "2027-1": 127,
  "2027-2": 158,
  "2027-3": 186,
  "2027-4": 217,
  "2027-5": 247,
  "2027-6": 18,
  "2027-7": 48,
  "2027-8": 79,
  "2027-9": 110,
  "2027-10": 140,
  "2027-11": 171,
  "2027-12": 201,
  "2028-1": 232,
  "2028-2": 3,
  "2028-3": 31,
  "2028-4": 62,
  "2028-5": 92,
  "2028-6": 123,
  "2028-7": 153,
  "2028-8": 184,
  "2028-9": 215,
  "2028-10": 245,
  "2028-11": 16,
  "2028-12": 46,
  "2029-1": 77,
  "2029-2": 108,
  "2029-3": 136,
  "2029-4": 167,
  "2029-5": 197,
  "2029-6": 228,
  "2029-7": 258,
  "2029-8": 29,
  "2029-9": 60,
  "2029-10": 90,
  "2029-11": 121,
  "2029-12": 151,
  "2030-1": 182,
  "2030-2": 213,
  "2030-3": 241,
  "2030-4": 12,
  "2030-5": 42,
  "2030-6": 73,
  "2030-7": 103,
  "2030-8": 134,
  "2030-9": 165,
  "2030-10": 195,
  "2030-11": 226,
  "2030-12": 256,
  "2031-1": 27,
  "2031-2": 58,
  "2031-3": 86,
  "2031-4": 117,
  "2031-5": 147,
  "2031-6": 178,
  "2031-7": 208,
  "2031-8": 239,
  "2031-9": 10,
  "2031-10": 40,
  "2031-11": 71,
  "2031-12": 101,
  "2032-1": 132,
  "2032-2": 163,
  "2032-3": 191,
  "2032-4": 222,
  "2032-5": 252,
  "2032-6": 23,
  "2032-7": 53,
  "2032-8": 84,
  "2032-9": 115,
  "2032-10": 145,
  "2032-11": 176,
  "2032-12": 206,
  "2033-1": 237,
  "2033-2": 8,
  "2033-3": 36,
  "2033-4": 67,
  "2033-5": 97,
  "2033-6": 128,
  "2033-7": 158,
  "2033-8": 189,
  "2033-9": 220,
  "2033-10": 250,
  "2033-11": 21,
  "2033-12": 51,
  "2034-1": 82,
  "2034-2": 113,
  "2034-3": 141,
  "2034-4": 172,
  "2034-5": 202,
  "2034-6": 233,
  "2034-7": 3,
  "2034-8": 34,
  "2034-9": 65,
  "2034-10": 95,
  "2034-11": 126,
  "2034-12": 156,
  "2035-1": 187,
  "2035-2": 218,
  "2035-3": 246,
  "2035-4": 17,
  "2035-5": 47,
  "2035-6": 78,
  "2035-7": 108,
  "2035-8": 139,
  "2035-9": 170,
  "2035-10": 200,
  "2035-11": 231,
  "2035-12": 1,
  "2036-1": 32,
  "2036-2": 63,
  "2036-3": 91,
  "2036-4": 122,
  "2036-5": 152,
  "2036-6": 183,
  "2036-7": 213,
  "2036-8": 244,
  "2036-9": 15,
  "2036-10": 45,
  "2036-11": 76,
  "2036-12": 106,
  "2037-1": 137,
  "2037-2": 168,
  "2037-3": 196,
  "2037-4": 227,
  "2037-5": 257,
  "2037-6": 28,
  "2037-7": 58,
  "2037-8": 89,
  "2037-9": 120,
  "2037-10": 150,
  "2037-11": 181,
  "2037-12": 211,
  "2038-1": 242,
  "2038-2": 13,
  "2038-3": 41,
  "2038-4": 72,
  "2038-5": 102,
  "2038-6": 133,
  "2038-7": 163,
  "2038-8": 194,
  "2038-9": 225,
  "2038-10": 255,
  "2038-11": 26,
  "2038-12": 56,
  "2039-1": 87,
  "2039-2": 118,
  "2039-3": 146,
  "2039-4": 177,
  "2039-5": 207,
  "2039-6": 238,
  "2039-7": 8,
  "2039-8": 39,
  "2039-9": 70,
  "2039-10": 100,
  "2039-11": 131,
  "2039-12": 161,
  "2040-1": 192,
  "2040-2": 223,
  "2040-3": 251,
  "2040-4": 22,
  "2040-5": 52,
  "2040-6": 83,
  "2040-7": 113,
  "2040-8": 144,
  "2040-9": 175,
  "2040-10": 205,
  "2040-11": 236,
  "2040-12": 6,
  "2041-1": 37,
  "2041-2": 68,
  "2041-3": 96,
  "2041-4": 127,
  "2041-5": 157,
  "2041-6": 188,
  "2041-7": 218,
  "2041-8": 249,
  "2041-9": 20,
  "2041-10": 50,
  "2041-11": 81,
  "2041-12": 111,
  "2042-1": 142,
  "2042-2": 173,
  "2042-3": 201,
  "2042-4": 232,
  "2042-5": 2,
  "2042-6": 33,
  "2042-7": 63,
  "2042-8": 94,
  "2042-9": 125,
  "2042-10": 155,
  "2042-11": 186,
  "2042-12": 216,
  "2043-1": 247,
  "2043-2": 18,
  "2043-3": 46,
  "2043-4": 77,
  "2043-5": 107,
  "2043-6": 138,
  "2043-7": 168,
  "2043-8": 199,
  "2043-9": 230,
  "2043-10": 0,
  "2043-11": 31,
  "2043-12": 61,
  "2044-1": 92,
  "2044-2": 123,
  "2044-3": 151,
  "2044-4": 182,
  "2044-5": 212,
  "2044-6": 243,
  "2044-7": 13,
  "2044-8": 44,
  "2044-9": 75,
  "2044-10": 105,
  "2044-11": 136,
  "2044-12": 166,
  "2045-1": 197,
  "2045-2": 228,
  "2045-3": 256,
  "2045-4": 27,
  "2045-5": 57,
  "2045-6": 88,
  "2045-7": 118,
  "2045-8": 149,
  "2045-9": 180,
  "2045-10": 210,
  "2045-11": 241,
  "2045-12": 11,
  "2046-1": 42,
  "2046-2": 73,
  "2046-3": 101,
  "2046-4": 132,
  "2046-5": 162,
  "2046-6": 193,
  "2046-7": 223,
  "2046-8": 254,
  "2046-9": 25,
  "2046-10": 55,
  "2046-11": 86,
  "2046-12": 116,
  "2047-1": 147,
  "2047-2": 178,
  "2047-3": 206,
  "2047-4": 237,
  "2047-5": 7,
  "2047-6": 38,
  "2047-7": 68,
  "2047-8": 99,
  "2047-9": 130,
  "2047-10": 160,
  "2047-11": 191,
  "2047-12": 221,
  "2048-1": 252,
  "2048-2": 23,
  "2048-3": 51,
  "2048-4": 82,
  "2048-5": 112,
  "2048-6": 143,
  "2048-7": 173,
  "2048-8": 204,
  "2048-9": 235,
  "2048-10": 5,
  "2048-11": 36,
  "2048-12": 66,
  "2049-1": 97,
  "2049-2": 128,
  "2049-3": 156,
  "2049-4": 187,
  "2049-5": 217,
  "2049-6": 248,
  "2049-7": 18,
  "2049-8": 49,
  "2049-9": 80,
  "2049-10": 110,
  "2049-11": 141,
  "2049-12": 171,
  "2050-1": 202,
  "2050-2": 233,
  "2050-3": 1,
  "2050-4": 32,
  "2050-5": 62,
  "2050-6": 93,
  "2050-7": 123,
  "2050-8": 154,
  "2050-9": 185,
  "2050-10": 215,
  "2050-11": 246,
  "2050-12": 16,
  "2051-1": 47,
  "2051-2": 78,
  "2051-3": 106,
  "2051-4": 137,
  "2051-5": 167,
  "2051-6": 198,
  "2051-7": 228,
  "2051-8": 259,
  "2051-9": 30,
  "2051-10": 60,
  "2051-11": 91,
  "2051-12": 121,
  "2052-1": 152,
  "2052-2": 183,
  "2052-3": 211,
  "2052-4": 242,
  "2052-5": 12,
  "2052-6": 43,
  "2052-7": 73,
  "2052-8": 104,
  "2052-9": 135,
  "2052-10": 165,
  "2052-11": 196,
  "2052-12": 226,
  "2053-1": 257,
  "2053-2": 28,
  "2053-3": 56,
  "2053-4": 87,
  "2053-5": 117,
  "2053-6": 148,
  "2053-7": 178,
  "2053-8": 209,
  "2053-9": 240,
  "2053-10": 10,
  "2053-11": 41,
  "2053-12": 71,
  "2054-1": 102,
  "2054-2": 133,
  "2054-3": 161,
  "2054-4": 192,
  "2054-5": 222,
  "2054-6": 253,
  "2054-7": 23,
  "2054-8": 54,
  "2054-9": 85,
  "2054-10": 115,
  "2054-11": 146,
  "2054-12": 176,
  "2055-1": 207,
  "2055-2": 238,
  "2055-3": 6,
  "2055-4": 37,
  "2055-5": 67,
  "2055-6": 98,
  "2055-7": 128,
  "2055-8": 159,
  "2055-9": 190,
  "2055-10": 220,
  "2055-11": 251,
  "2055-12": 21,
  "2056-1": 52,
  "2056-2": 83,
  "2056-3": 111,
  "2056-4": 142,
  "2056-5": 172,
  "2056-6": 203,
  "2056-7": 233,
  "2056-8": 4,
  "2056-9": 35,
  "2056-10": 65,
  "2056-11": 96,
  "2056-12": 126,
  "2057-1": 157,
  "2057-2": 188,
  "2057-3": 216,
  "2057-4": 247,
  "2057-5": 17,
  "2057-6": 48,
  "2057-7": 78,
  "2057-8": 109,
  "2057-9": 140,
  "2057-10": 170,
  "2057-11": 201,
  "2057-12": 231,
  "2058-1": 2,
  "2058-2": 33,
  "2058-3": 61,
  "2058-4": 92,
  "2058-5": 122,
  "2058-6": 153,
  "2058-7": 183,
  "2058-8": 214,
  "2058-9": 245,
  "2058-10": 15,
  "2058-11": 46,
  "2058-12": 76,
  "2059-1": 107,
  "2059-2": 138,
  "2059-3": 166,
  "2059-4": 197,
  "2059-5": 227,
  "2059-6": 258,
  "2059-7": 28,
  "2059-8": 59,
  "2059-9": 90,
  "2059-10": 120,
  "2059-11": 151,
  "2059-12": 181,
  "2060-1": 212,
  "2060-2": 243,
  "2060-3": 11,
  "2060-4": 42,
  "2060-5": 72,
  "2060-6": 103,
  "2060-7": 133,
  "2060-8": 164,
  "2060-9": 195,
  "2060-10": 225,
  "2060-11": 256,
  "2060-12": 26,
  "2061-1": 57,
  "2061-2": 88,
  "2061-3": 116,
  "2061-4": 147,
  "2061-5": 177,
  "2061-6": 208,
  "2061-7": 238,
  "2061-8": 9,
  "2061-9": 40,
  "2061-10": 70,
  "2061-11": 101,
  "2061-12": 131,
  "2062-1": 162,
  "2062-2": 193,
  "2062-3": 221,
  "2062-4": 252,
  "2062-5": 22,
  "2062-6": 53,
  "2062-7": 83,
  "2062-8": 114,
  "2062-9": 145,
  "2062-10": 175,
  "2062-11": 206,
  "2062-12": 236,
  "2063-1": 7,
  "2063-2": 38,
  "2063-3": 66,
  "2063-4": 97,
  "2063-5": 127,
  "2063-6": 158,
  "2063-7": 188,
  "2063-8": 219,
  "2063-9": 250,
  "2063-10": 20,
  "2063-11": 51,
  "2063-12": 81,
  "2064-1": 112,
  "2064-2": 143,
  "2064-3": 171,
  "2064-4": 202,
  "2064-5": 232,
  "2064-6": 3,
  "2064-7": 33,
  "2064-8": 64,
  "2064-9": 95,
  "2064-10": 125,
  "2064-11": 156,
  "2064-12": 186,
  "2065-1": 217,
  "2065-2": 248,
  "2065-3": 16,
  "2065-4": 47,
  "2065-5": 77,
  "2065-6": 108,
  "2065-7": 138,
  "2065-8": 169,
  "2065-9": 200,
  "2065-10": 230,
  "2065-11": 1,
  "2065-12": 31
};
