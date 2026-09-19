# Sungyeon Park Portfolio

박성연의 반응형 포트폴리오 사이트입니다. 별도 빌드 과정 없이 정적 호스팅에 바로 배포할 수 있습니다.

## 로컬 실행

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소에 업로드합니다.
2. 저장소의 **Settings → Pages**에서 배포 브랜치와 루트 폴더를 선택합니다.
3. Custom domain에 `sungyeon-park.site`를 입력합니다.
4. 도메인 구매처 DNS에서 GitHub Pages 안내에 따라 `A` 레코드와 `www`용 `CNAME`을 설정합니다.
5. DNS 반영 후 **Enforce HTTPS**를 활성화합니다.

`CNAME` 파일은 이미 포함되어 있습니다.
