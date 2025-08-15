import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { PropertiesPDF } from "../types/types";

const styles = StyleSheet.create({
  page: { padding: 10 },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#101010",
    width: "100%",
    paddingTop: 10,
    height: 2,
  },
  Text: { fontFamily: "system-ui" },
});

export const PreviewPDF = ({ cv }: { cv: PropertiesPDF }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <View>
            <Text style={{ fontSize: 40 }}>{cv.title}</Text>

            <Text style={{ fontSize: 20 }}>{cv.subtitle}</Text>
          </View>

          <View style={{ justifyContent: "space-between", fontSize: 16 }}>
            {cv.contacts.map(({ id, contact }) => (
              <Text key={id}>{contact}</Text>
            ))}
          </View>
        </View>

        {cv.resume && (
          <View>
            <View style={styles.line} />
            <Text style={{ textAlign: "center", paddingBottom: 8 }}>
              Sobre mi
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
              }}>
              {cv.resume}
            </Text>
          </View>
        )}
        {cv.experiences !== undefined && cv.experiences?.length > 0 && (
          <View>
            <View style={styles.line} />
            <Text style={{ textAlign: "center", paddingBottom: 8 }}>
              Experiencia
            </Text>
            <View>
              {cv.experiences?.map(
                ({ id, name, date_start, date_end, detail, company }) => (
                  <View key={id} style={{ paddingBottom: 8, fontSize: 16 }}>
                    <Text style={{ fontWeight: 600 }}>{company}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}>
                      <Text>{name}</Text>
                      <Text>
                        {date_start} | {date_end}
                      </Text>
                    </View>
                    <Text>{detail}</Text>
                  </View>
                )
              )}
            </View>
          </View>
        )}

        {cv.skills.length > 0 && (
          <View>
            <View style={styles.line} />
            <Text style={{ textAlign: "center", paddingBottom: 8 }}>
              Habilidades
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: 16,
              }}>
              <View>
                {cv.skills
                  ?.slice(0, Math.ceil(cv.skills.length / 2))
                  .map(({ id, skill }) => (
                    <Text key={id}>{skill}</Text>
                  ))}
              </View>
              <View>
                {cv.skills
                  ?.slice(Math.ceil(cv.skills.length / 2), cv.skills.length)
                  .map(({ id, skill }) => (
                    <Text key={id}>{skill}</Text>
                  ))}
              </View>
            </View>
          </View>
        )}

        {cv.educations.length > 0 && (
          <View>
            <View style={styles.line} />
            <Text style={{ textAlign: "center", paddingBottom: 8 }}>
              Educación
            </Text>
            <View>
              {cv.educations.map(({ id, name, date_start, date_end }) => (
                <View
                  key={id}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: 8,
                    fontSize: 16,
                  }}>
                  <Text>{name}</Text>
                  <Text>
                    {date_start} | {date_end}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {cv.lenguages.length > 0 && (
          <View>
            <View style={styles.line} />
            <Text style={{ textAlign: "center", paddingBottom: 8 }}>
              Idiomas
            </Text>

            <View>
              {cv.lenguages.map(({ id, name, level }) => (
                <View
                  key={id}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: 8,
                    fontSize: 16,
                  }}>
                  <Text>{name}</Text>
                  <Text>{level}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
