# リファクタリングタスクリスト

このファイルは、src配下のリファクタリング作業を進めるためのタスクリストです。
各タスクを完了したらチェックボックスにチェックを入れてください。

## 優先度: 高

### 1. カラーコードのハードコーディング解消
- [ ] `Header.tsx` - ハードコードされたカラーコードをTailwindのCSS変数に置き換え
- [ ] `Hero.tsx` - ハードコードされたカラーコードをTailwindのCSS変数に置き換え
- [ ] `About.tsx` - ハードコードされたカラーコードをTailwindのCSS変数に置き換え
- [ ] `Biography.tsx` - ハードコードされたカラーコードをTailwindのCSS変数に置き換え
- [ ] `Favorites.tsx` - ハードコードされたカラーコードをTailwindのCSS変数に置き換え
- [ ] `Links.tsx` - ハードコードされたカラーコードをTailwindのCSS変数に置き換え
- [ ] `Footer.tsx` - ハードコードされたカラーコードをTailwindのCSS変数に置き換え

**詳細:**
- `#FF7A00` → `var(--color-primary)` または Tailwindクラス `text-[var(--color-primary)]`
- `#e5e5e5` → `var(--color-border)` または Tailwindクラス `border-[var(--color-border)]`
- `#888888` → `var(--color-text-secondary)` または Tailwindクラス `text-[var(--color-text-secondary)]`
- `#fafafa` → 新しいCSS変数として定義するか、既存の変数を使用

### 2. CSSファイルの重複解消
- [ ] `index.css` と `globals.css` の重複スタイルを確認
- [ ] どちらかに統合（推奨: `globals.css` に統合）
- [ ] `index.css` から重複部分を削除
- [ ] ビルドが正常に動作することを確認

**詳細:**
- `body`, `h1`, `h2`, `h3`, `p`, `a` のスタイル定義が重複している
- `globals.css` がより整理されているため、こちらに統合することを推奨

### 3. 共通レイアウトパターンの抽出
- [ ] `src/components/common/Section.tsx` を作成
- [ ] `max-w-4xl mx-auto px-6 py-16` パターンを共通コンポーネント化
- [ ] 各セクションコンポーネントで `Section` コンポーネントを使用するように置き換え
  - [ ] `About.tsx`
  - [ ] `Biography.tsx`
  - [ ] `Favorites.tsx`
  - [ ] `Links.tsx`
  - [ ] `Hero.tsx`（必要に応じて）

**詳細:**
```tsx
// Section.tsx の例
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export function Section({ children, className, background = 'white' }: SectionProps) {
  const bgClass = background === 'gray' ? 'bg-[var(--color-gray-100)]' : 'bg-white';
  return (
    <section className={`w-full py-16 ${bgClass}`}>
      <div className={`max-w-4xl mx-auto px-6 ${className || ''}`}>
        {children}
      </div>
    </section>
  );
}
```

### 4. データの外部化
- [ ] `src/data/` ディレクトリを作成
- [ ] `src/data/biography.ts` を作成してBiographyのデータを移動
- [ ] `src/data/favorites.ts` を作成してFavoritesのデータを移動
- [ ] `src/data/links.ts` を作成してLinksのデータを移動
- [ ] 各コンポーネントでインポートして使用するように変更

**詳細:**
- `Biography.tsx` の `timeline` 配列
- `Favorites.tsx` の `favorites` 配列
- `Links.tsx` の `links` 配列

### 5. 定数の一元管理
- [ ] `src/constants/` ディレクトリを作成
- [ ] `src/constants/colors.ts` を作成（必要に応じて）
- [ ] `src/constants/urls.ts` を作成してURLを一元管理
- [ ] 各コンポーネントで使用しているURLを定数に置き換え

**詳細:**
- `Header.tsx`: `https://shoma2da.com`, `https://blog.shoma2da.com`, `https://github.com/shoma2da`
- `Links.tsx`: 各種SNSのURL

## 優先度: 中

### 6. 未使用依存関係の削除
- [ ] `package.json` を確認して実際に使用されているRadix UIコンポーネントを特定
- [ ] 使用されていない依存関係をリストアップ
- [ ] 依存関係を削除
- [ ] `npm install` を実行して動作確認

**確認が必要な依存関係:**
- `@radix-ui/react-accordion`
- `@radix-ui/react-alert-dialog`
- `@radix-ui/react-aspect-ratio`
- `@radix-ui/react-avatar`
- `@radix-ui/react-checkbox`
- `@radix-ui/react-collapsible`
- `@radix-ui/react-context-menu`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-hover-card`
- `@radix-ui/react-label`
- `@radix-ui/react-menubar`
- `@radix-ui/react-navigation-menu`
- `@radix-ui/react-popover`
- `@radix-ui/react-progress`
- `@radix-ui/react-radio-group`
- `@radix-ui/react-scroll-area`
- `@radix-ui/react-select`
- `@radix-ui/react-separator`
- `@radix-ui/react-slider`
- `@radix-ui/react-switch`
- `@radix-ui/react-tabs`
- `@radix-ui/react-toggle`
- `@radix-ui/react-toggle-group`
- `@radix-ui/react-tooltip`
- その他の未使用ライブラリ（`cmdk`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-hook-form`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`, `next-themes` など）

### 7. vite.config.tsのalias整理
- [ ] 実際に使用されているaliasを確認
- [ ] 使用されていないaliasを削除
- [ ] ビルドが正常に動作することを確認

**確認が必要なalias:**
- バージョン付きのalias（`vaul@1.1.2` など）が実際に使用されているか
- `@` エイリアスが使用されているか

### 8. 型定義の改善
- [ ] `Links.tsx` の `icon` プロパティの型を改善
- [ ] 適切な型定義を作成（`IconType` など）
- [ ] 型安全性を向上

**詳細:**
```tsx
// 改善案
type IconType = React.ComponentType<{ className?: string }> | 'X';

interface LinkItem {
  icon: IconType;
  label: string;
  url: string;
}
```

### 9. Reactインポートの削除
- [ ] `ImageWithFallback.tsx` から不要な `React` インポートを削除
- [ ] 動作確認

### 10. main.tsxのフォーマット修正
- [ ] `main.tsx` のインデントを修正
- [ ] コードフォーマットを統一

## 優先度: 低

### 11. セマンティックHTMLの改善
- [ ] 各セクションで適切な `<section>` タグが使用されているか確認
- [ ] 必要に応じて `aria-label` を追加
- [ ] アクセシビリティを向上

### 12. コンポーネントの分割
- [ ] 大きなコンポーネントがないか確認
- [ ] 必要に応じて小さなコンポーネントに分割
  - [ ] `Biography.tsx` のタイムラインアイテム
  - [ ] `Favorites.tsx` のアイテム
  - [ ] `Links.tsx` のリンクアイテム

### 13. エラーハンドリングの改善
- [ ] `ImageWithFallback.tsx` のエラーハンドリングを改善
- [ ] より詳細なエラー情報を提供（開発環境のみ）
- [ ] リトライ機能の検討（オプション）

### 14. アクセシビリティの向上
- [ ] すべてのリンクに適切な `aria-label` が設定されているか確認
- [ ] アイコンボタンに適切な説明を追加
- [ ] キーボードナビゲーションの確認

## 完了チェックリスト

すべてのタスクを完了したら、以下を確認してください：

- [ ] すべてのコンポーネントが正常に動作する
- [ ] ビルドが成功する（`npm run build`）
- [ ] 開発サーバーが正常に起動する（`npm run dev`）
- [ ] 見た目に変更がないことを確認
- [ ] コンソールにエラーがないことを確認
- [ ] 未使用の依存関係が削除されている
- [ ] コードが整理され、保守性が向上している

---

## メモ

作業中に気づいたことや追加の改善点があれば、ここにメモしてください。
